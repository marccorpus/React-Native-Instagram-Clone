import {StyleProp, TextStyle, Text} from 'react-native';

import styles from './styles';

interface UserNameProps {
  name: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const UserName = ({name, style, onPress}: UserNameProps) => {
  return (
    <Text style={[styles.text, style]} onPress={onPress}>
      {name}
    </Text>
  );
};

export default UserName;
