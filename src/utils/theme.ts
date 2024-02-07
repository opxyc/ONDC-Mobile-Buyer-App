import {configureFonts, MD3LightTheme} from 'react-native-paper';
import {Platform} from 'react-native';

const fontConfig: any = {
  titleLarge: {
    fontFamily: Platform.select({
      web: 'Inter-Bold, sans-serif',
      ios: 'Inter-Bold',
      default: 'Inter-Bold',
    }),
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
  },
  titleMedium: {
    fontFamily: Platform.select({
      web: 'Inter-Bold, sans-serif',
      ios: 'Inter-Bold',
      default: 'Inter-Bold',
    }),
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: Platform.select({
      web: 'Inter-Bold, sans-serif',
      ios: 'Inter-Bold',
      default: 'Inter-Bold',
    }),
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
  labelSmall: {
    fontFamily: Platform.select({
      web: 'Inter-Regular, sans-serif',
      ios: 'Inter-Regular',
      default: 'Inter-Regular',
    }),
    fontSize: 10,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: Platform.select({
      web: 'Inter-Regular, sans-serif',
      ios: 'Inter-Regular',
      default: 'Inter-Regular',
    }),
    fontSize: 11,
    lineHeight: 14,
  },
  labelLarge: {
    fontFamily: Platform.select({
      web: 'Inter-Bold, sans-serif',
      ios: 'Inter-Bold',
      default: 'Inter-Bold',
    }),
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 14,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Platform.select({
      web: 'Inter-Regular',
      ios: 'Inter-Regular',
      default: 'Inter-Regular',
    }),
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: Platform.select({
      web: 'Inter-Medium',
      ios: 'Inter-Medium',
      default: 'Inter-Medium',
    }),
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: Platform.select({
      web: 'Inter-Medium',
      ios: 'Inter-Medium',
      default: 'Inter-Medium',
    }),
  },
};

export const theme = {
  ...MD3LightTheme,
  roundness: 4,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#008ECC',
    warning: '#F9C51C',
    footer: '#f3bf93',
    background: '#FFF',
    surface: '#FFF',
    error: '#D83232',
    red: '#D61C4E',
    text: '#333',
    shippedBackground: '#FFC132',
    deliveredBackground: '#E8FCF1',
    cancelledBackground: '#FFEBEB',
    statusBackground: '#E9F1F8',
    success: '#419E6A',
    surfaceDisabled: '#AAA',
    onSurfaceDisabled: '#4D4D4D',
    white: '#fff',
    border: '#ebebeb',
  },
  fonts: configureFonts({config: fontConfig}),
};
