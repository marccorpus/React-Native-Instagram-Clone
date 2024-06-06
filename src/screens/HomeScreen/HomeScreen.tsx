import {View, FlatList} from 'react-native';

import FeedPost from '../../components/FeedPost';

import styles from './styles';

import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
