import {TextStyle} from 'react-native';

const size = {
  sm: 12,
  normal: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  light: '200',
  normal: 'normal',
  bold: '700',
};

export default {size, weight};
