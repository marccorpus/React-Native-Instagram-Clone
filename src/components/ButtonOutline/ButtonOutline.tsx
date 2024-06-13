import {Pressable, Text} from 'react-native';

import styles from './styles';

interface ButtonOutline {
  text: string;
  onPress: () => void;
}

const ButtonOutline = ({text, onPress}: ButtonOutline) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonOutline;
