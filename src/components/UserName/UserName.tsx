import {StyleProp, TextStyle, Text} from 'react-native';

import styles from './styles';

interface UserNameProps {
  name: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const UserName = ({name, textStyle, onPress}: UserNameProps) => {
  return (
    <Text style={[styles.text, textStyle]} onPress={onPress}>
      {name}
    </Text>
  );
};

export default UserName;
