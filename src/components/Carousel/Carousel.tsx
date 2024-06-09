import {useState} from 'react';
import {
  useWindowDimensions,
  View,
  FlatList,
  ViewToken,
  Image,
} from 'react-native';

import DoublePressable from '../DoublePressable';

import styles from './styles';

interface CarouselProps {
  images: string[];
  onDoublePress: () => void;
}

const Carousel = ({images, onDoublePress}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const {width} = useWindowDimensions();

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChangedHandler = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    setActiveIndex(viewableItems[0]?.index);
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image style={[styles.image, {width}]} source={{uri: item}} />
          </DoublePressable>
        )}
        onViewableItemsChanged={onViewableItemsChangedHandler}
        viewabilityConfig={viewabilityConfig}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View style={styles.indicatorsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
