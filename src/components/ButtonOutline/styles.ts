import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  text: {
    textAlign: 'center',
    fontWeight: fonts.weight.bold,
  },
});

export default styles;
