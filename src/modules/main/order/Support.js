import {Formik} from 'formik';
import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Dialog, Text, withTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import ContainButton from '../../../components/button/ContainButton';
import OutlineButton from '../../../components/button/OutlineButton';
import InputField from '../../../components/input/InputField';
import {Context as AuthContext} from '../../../context/Auth';
import {getData, postData} from '../../../utils/api';
import {BASE_URL, CALL, ON_SUPPORT, SUPPORT} from '../../../utils/apiUtilities';

/**
 * Component is used to display dialogue when user clicks on call icon
 * @param theme: application theme
 * @param item:single order object
 * @param modalVisible:boolean indicates visibility of dialogue
 * @param setModalVisible:function to set visibility of dialogue
 * @returns {JSX.Element}
 * @constructor
 */
const Support = ({modalVisible, setModalVisible, item, theme}) => {
  const {colors} = theme;

  const {t} = useTranslation();

  const {
    state: {token},
  } = useContext(AuthContext);

  const [callInProgress, setCallInProgress] = useState(false);

  const userInfo = {
    number: '',
  };

  const validationSchema = Yup.object({
    number: Yup.string()
      .trim()
      .matches(/^[6-9]{1}[0-9]{9}$/, t('errors.invalid_number'))
      .required(t('errors.required')),
  });

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  /**
   * Component is used to handle click event of call me button
   * @param number:number entered by uder
   * @returns {Promise<void>}
   */
  const requestCall = async number => {
    try {
      setCallInProgress(true);
      const {data} = await postData(
        `${BASE_URL}${SUPPORT}`,
        [
          {
            context: {
              bpp_id: item.bpp_id,
              transaction_id: item.transaction_id,
            },
            message: {
              ref_id: item.ref_id,
            },
          },
        ],
        options,
      );
      if (data[0].message.ack.status === 'ACK') {
        const response = await getData(
          `${BASE_URL}${ON_SUPPORT}messageIds=${data[0].context.message_id}`,
          options,
        );

        await postData(
          `${BASE_URL}${CALL}`,

          {
            customer_phone_number: response.data[0].message.phone,
            seller_phone_number: `+91${number}`,
          },
          options,
        );
        setModalVisible(false);
      }
      setCallInProgress(false);
    } catch (e) {
      setCallInProgress(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Dialog isVisible={modalVisible} overlayStyle={styles.overlayStyle}>
        <View style={styles.container}>
          <Text style={styles.heading}>ONDC{'  '}SUPPORT</Text>

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.close}>
            <Icon name="close-thick" color={colors.accentColor} size={16}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.messageContainer}>{t('main.order.message')}</Text>

        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={values => {
            requestCall(values.number)
              .then(() => {})
              .catch(() => {});
          }}>
          {({
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
            }) => {
            return (
              <>
                <InputField
                  keyboardType={'numeric'}
                  maxLength={10}
                  numberOfLines={1}
                  value={values.number}
                  onBlur={handleBlur('number')}
                  placeholder={t('main.order.placeholder')}
                  errorMessage={touched.number ? errors.number : null}
                  onChangeText={handleChange('number')}
                />
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <OutlineButton
                      title={t('main.order.cancel')}
                      onPress={() => setModalVisible(false)}
                      color={colors.error}
                    />
                  </View>
                  <View style={styles.button}>
                    <ContainButton
                      title={t('main.order.call_me')}
                      onPress={handleSubmit}
                      loader={callInProgress}
                    />
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
      </Dialog>
    </View>
  );
};

export default withTheme(Support);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-end',
  },
  close: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  overlayStyle: {
    borderRadius: 10,
    width: '90%',
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  heading: {fontSize: 18},
  messageContainer: {padding: 10},
  button: {width: 90, marginHorizontal: 8},
});
