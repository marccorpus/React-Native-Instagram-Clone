import {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserName from '../UserName';
import UserAvatar from '../UserAvatar';

import styles from './styles';

import {IComment} from '../../types/models';

interface CommentProps {
  comment: IComment;
  showDetails?: boolean;
}

const Comment = ({comment, showDetails}: CommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleIsLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.container}>
      {showDetails && (
        <UserAvatar style={styles.userAvatar} uri={comment.user.image} />
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          <UserName style={styles.userName} name={comment.user.username} />{' '}
          {comment.comment}
        </Text>

        {showDetails && (
          <View style={styles.subDescriptionContainer}>
            <Text style={styles.subDescription}>2d</Text>
            <Text style={styles.subDescription}>5 likes</Text>
            <Text style={styles.subDescription}>Reply</Text>
          </View>
        )}
      </View>

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
