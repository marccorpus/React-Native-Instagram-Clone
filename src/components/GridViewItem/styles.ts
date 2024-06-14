import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
  },
  image: {
    flex: 1,
  },
  collections: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: fonts.size.md,
    color: colors.white,
  },
});

export default styles;
