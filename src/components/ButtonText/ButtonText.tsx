import {StyleProp, ViewStyle, TextStyle, Pressable, Text} from 'react-native';

import styles from './styles';

interface ButtonTextProps {
  text: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ButtonText = ({
  text,
  onPress,
  containerStyle,
  textStyle,
}: ButtonTextProps) => {
  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default ButtonText;
