import {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserName from '../UserName';

import styles from './styles';

import {IComment} from '../../types/models';

interface CommentProps {
  comment: IComment;
}

const Comment = ({comment}: CommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleIsLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        <UserName textStyle={styles.userName} name={comment.user.username} />{' '}
        {comment.comment}
      </Text>

      <Pressable onPress={toggleIsLiked}>
        <Ionicons
          style={[styles.heartIcon, isLiked && styles.isLiked]}
          name={isLiked ? 'heart-sharp' : 'heart-outline'}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
