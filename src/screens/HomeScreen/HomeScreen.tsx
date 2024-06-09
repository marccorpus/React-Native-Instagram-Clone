import {useState} from 'react';
import {View, FlatList, ViewToken} from 'react-native';

import FeedPost from '../../components/FeedPost';

import styles from './styles';

import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  const [viewablePostId, setViewablePostId] = useState<null | number>(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChangedHandler = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    setViewablePostId(viewableItems[0]?.item.id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} viewablePostId={viewablePostId} />
        )}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChangedHandler}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default HomeScreen;
