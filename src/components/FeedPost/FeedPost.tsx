import {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserAvatar from '../UserAvatar';
import UserName from '../UserName';
import Comment from '../Comment';
import ButtonText from '../ButtonText';
import DoublePressable from '../DoublePressable';

import styles from './styles';

import {IPost} from '../../types/models';

interface FeedPostProps {
  post: IPost;
}

const FeedPost = ({post}: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleIsLiked = () => setIsLiked(v => !v);
  const toggleDescriptionExpanded = () => setIsDescriptionExpanded(v => !v);

  return (
    <>
      <View style={styles.header}>
        <UserAvatar uri={post.user.image} />
        <UserName name={post.user.username} />
        <Ionicons style={styles.moreIcon} name="ellipsis-horizontal" />
      </View>

      <DoublePressable onDoublePress={toggleIsLiked}>
        <Image style={styles.postImage} source={{uri: post.image}} />
      </DoublePressable>

      <View style={styles.footer}>
        <View style={[styles.actionsContainer, styles.row]}>
          <Pressable onPress={toggleIsLiked}>
            <Ionicons
              style={[styles.actionIcon, isLiked && styles.isLiked]}
              name={isLiked ? 'heart-sharp' : 'heart-outline'}
            />
          </Pressable>
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

        <Text
          style={[styles.description, styles.row]}
          numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <UserName textStyle={styles.userName} name={post.user.username} />{' '}
          {post.description}
        </Text>
        <ButtonText
          text={`Show ${isDescriptionExpanded ? 'less' : 'more'}`}
          onPress={toggleDescriptionExpanded}
        />

        {post.nofLikes > 0 && (
          <ButtonText
            containerStyle={styles.viewAllComments}
            text={`View all ${post.nofLikes} comments`}
            onPress={() => {}}
          />
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
