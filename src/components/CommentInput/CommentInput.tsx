import {
  View,
  TextInput,
  Text,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';

import UserAvatar from '../UserAvatar';

import styles from './styles';

const CommentInput = () => {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
      <View style={styles.container}>
        <UserAvatar
          style={styles.userAvatar}
          uri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
        />

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add a comment"
            multiline
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
          />
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Post</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentInput;
