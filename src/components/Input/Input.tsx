import {TextInput} from 'react-native';

import styles from './styles';

interface InputProps {
  value: string | undefined;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

const Input = ({value, onChangeText, placeholder, multiline}: InputProps) => {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      multiline={multiline}
    />
  );
};

export default Input;
