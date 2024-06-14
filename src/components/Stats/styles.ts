import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  value: {
    color: colors.black,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
  },
  label: {
    color: colors.gray,
  },
});

export default styles;
