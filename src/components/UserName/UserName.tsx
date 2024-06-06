import {StyleProp, TextStyle, Text} from 'react-native';

import styles from './styles';

interface UserNameProps {
  name: string;
  textStyle?: StyleProp<TextStyle>;
}

const UserName = ({name, textStyle}: UserNameProps) => {
  return <Text style={[styles.text, textStyle]}>{name}</Text>;
};

export default UserName;
