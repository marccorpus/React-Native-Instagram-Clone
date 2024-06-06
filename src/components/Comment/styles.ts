import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  description: {
    flex: 1,
  },
  userName: {
    fontSize: fonts.size.normal,
  },
  heartIcon: {
    color: colors.black,
    fontSize: fonts.size.xl,
  },
});

export default styles;
