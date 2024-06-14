import {FlatList, StyleProp, ViewStyle} from 'react-native';

import GridViewItem from '../GridViewItem';

import styles from './styles';

import {IGridViewItem} from '../../types/components';

interface GridViewProps {
  items: IGridViewItem[];
  numColumns?: number;
  showsVerticalScrollIndicator?: boolean;
  columnWrapperStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  listHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}

const GridView = ({
  items,
  numColumns = 3,
  showsVerticalScrollIndicator = false,
  columnWrapperStyle,
  contentContainerStyle,
  listHeaderComponent,
}: GridViewProps) => {
  const gridWidth = (1 / numColumns) * 100;

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <GridViewItem item={item} width={gridWidth} />}
      numColumns={numColumns}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      columnWrapperStyle={[styles.spacing, columnWrapperStyle]}
      contentContainerStyle={[styles.spacing, contentContainerStyle]}
      ListHeaderComponent={listHeaderComponent}
    />
  );
};

export default GridView;
