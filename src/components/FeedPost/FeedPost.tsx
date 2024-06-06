import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserAvatar from '../UserAvatar';
import UserName from '../UserName';
import Comment from '../Comment';

import styles from './styles';

import {IPost} from '../../types/models';

interface FeedPostProps {
  post: IPost;
}

const FeedPost = ({post}: FeedPostProps) => {
  return (
    <>
      <View style={styles.header}>
        <UserAvatar uri={post.user.image} />
        <UserName name={post.user.username} />
        <Ionicons style={styles.moreIcon} name="ellipsis-horizontal" />
      </View>

      <Image style={styles.postImage} source={{uri: post.image}} />

      <View style={styles.footer}>
        <View style={[styles.actionsContainer, styles.row]}>
          <Ionicons style={styles.actionIcon} name="heart-outline" />
          <Ionicons style={styles.actionIcon} name="chatbubble-outline" />
          <Ionicons style={styles.actionIcon} name="paper-plane-outline" />
          <Ionicons
            style={[styles.actionIcon, styles.bookmarkIcon]}
            name="bookmark-outline"
          />
        </View>

        <Text style={[styles.likes, styles.row]}>
          Liked by <UserName textStyle={styles.userName} name="marcinecorpus" />{' '}
          and <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        <Text style={[styles.description, styles.row]}>
          <UserName textStyle={styles.userName} name={post.user.username} />{' '}
          {post.description}
        </Text>

        {post.nofLikes > 0 && (
          <Text style={[styles.viewAllComments, styles.row]}>
            View all {post.nofLikes} comments
          </Text>
        )}

        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <Text style={[styles.createdAt, styles.row]}>{post.createdAt}</Text>
      </View>
    </>
  );
};

export default FeedPost;
