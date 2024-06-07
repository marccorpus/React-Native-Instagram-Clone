import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
  },
  description: {
    flex: 1,
    color: colors.black,
  },
  userName: {
    fontSize: fonts.size.normal,
  },
  heartIcon: {
    color: colors.black,
    fontSize: fonts.size.xl,
  },
  isLiked: {
    color: colors.danger,
  },
});

export default styles;
