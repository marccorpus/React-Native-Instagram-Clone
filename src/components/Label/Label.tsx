import {StyleProp, TextStyle, Text} from 'react-native';

import styles from './styles';

interface LabelProps {
  label: string;
  style?: StyleProp<TextStyle>;
}

const Label = ({label, style}: LabelProps) => {
  return <Text style={[styles.text, style]}>{label}</Text>;
};

export default Label;
