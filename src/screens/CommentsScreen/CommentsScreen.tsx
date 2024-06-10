import {View, FlatList} from 'react-native';

import Comment from '../../components/Comment';
import CommentInput from '../../components/CommentInput';

import styles from './styles';

import comments from '../../assets/data/comments.json';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.commentsContainer}
        data={comments}
        renderItem={({item}) => <Comment comment={item} showDetails />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 8}} />}
      />

      <CommentInput />
    </View>
  );
};

export default CommentsScreen;
