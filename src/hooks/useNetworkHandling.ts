import axios from 'axios';
import {useSelector} from 'react-redux';

export default () => {
  const {token} = useSelector(({authReducer}) => authReducer);

  const getAuthConfig = (cancelToken = null) => {
    console.log('Token', token);
    const config: any = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (cancelToken) {
      config.cancelToken = cancelToken;
    }
    return config;
  };

  const getDataWithAuth = async (url: string, cancelToken: any) => {
    try {
      const config = getAuthConfig(cancelToken);
      console.log(url);
      return await axios.get(url, config);
    } catch (e) {
      throw e;
    }
  };

  return {
    getDataWithAuth,
  };
};
