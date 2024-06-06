import {StyleProp, ViewStyle, Pressable, Text} from 'react-native';

import styles from './styles';

interface ButtonTextProps {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

const ButtonText = ({containerStyle, text, onPress}: ButtonTextProps) => {
  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonText;
