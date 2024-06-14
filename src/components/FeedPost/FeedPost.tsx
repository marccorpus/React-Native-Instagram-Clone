import {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserAvatar from '../UserAvatar';
import UserName from '../UserName';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import Comment from '../Comment';
import ButtonText from '../ButtonText';
import DoublePressable from '../DoublePressable';

import styles from './styles';

import {IPost} from '../../types/models';

interface FeedPostProps {
  post: IPost;
  viewablePostId: null | number;
}

const FeedPost = ({post, viewablePostId}: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleIsLiked = () => setIsLiked(v => !v);
  const toggleDescriptionExpanded = () => setIsDescriptionExpanded(v => !v);

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <Image style={styles.postImage} source={{uri: post.image}} />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleIsLiked} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <VideoPlayer uri={post.video} paused={post.id !== viewablePostId} />
      </DoublePressable>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <UserAvatar uri={post.user.image} />
        <UserName name={post.user.username} />
        <Ionicons style={styles.moreIcon} name="ellipsis-horizontal" />
      </View>

      {content}

      <View style={styles.footer}>
        <View style={styles.actionsContainer}>
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

        <Text style={styles.postNoOfLikes}>
          Liked by
          {` `}
          <UserName style={styles.userName} name="marcinecorpus" />
          {` and `}
          <Text style={styles.bold}>{`${post.nofLikes} others`}</Text>
        </Text>

        <Text
          style={styles.postDescription}
          numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <UserName style={styles.userName} name={post.user.username} />
          <Text>{` ${post.description}`}</Text>
        </Text>

        <ButtonText
          containerStyle={styles.togglePostDescription}
          text={`Show ${isDescriptionExpanded ? 'less' : 'more'}`}
          onPress={toggleDescriptionExpanded}
        />

        {post.nofLikes && (
          <ButtonText
            containerStyle={styles.viewAllComments}
            text={`View all ${post.nofLikes} comments`}
            onPress={() => {}}
          />
        )}

        {post.comments?.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        <Text style={styles.createdAt}>{post.createdAt}</Text>
      </View>
    </>
  );
};

export default FeedPost;
