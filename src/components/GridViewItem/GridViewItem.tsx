import {View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import {IGridViewItem} from '../../types/components';

interface GridViewItemProps {
  item: IGridViewItem;
  width: number;
}

const GridViewItem = ({item, width}: GridViewItemProps) => {
  return (
    <View style={[{width: `${width}%`}, styles.container]}>
      <Image style={styles.image} source={{uri: item.image}} />
      {item.isCollection && (
        <MaterialIcons style={styles.collections} name="collections" />
      )}
    </View>
  );
};

export default GridViewItem;
