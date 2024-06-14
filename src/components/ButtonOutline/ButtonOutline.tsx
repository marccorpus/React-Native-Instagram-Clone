import {Pressable, StyleProp, ViewStyle, Text} from 'react-native';

import styles from './styles';

interface ButtonOutline {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ButtonOutline = ({text, onPress, style}: ButtonOutline) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonOutline;
