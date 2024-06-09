import {StyleSheet} from 'react-native';

import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  soundContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: colors.gray,
    padding: 6,
    borderRadius: 20,
  },
  soundIcon: {
    fontSize: fonts.size.md,
    color: colors.white,
  },
});

export default styles;
