import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserName from '../UserName';

import styles from './styles';

import {IComment} from '../../types/models';

interface CommentProps {
  comment: IComment;
}

const Comment = ({comment}: CommentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        <UserName textStyle={styles.userName} name={comment.user.username} />{' '}
        {comment.comment}
      </Text>

      <Ionicons style={styles.heartIcon} name="heart-outline" />
    </View>
  );
};

export default Comment;
