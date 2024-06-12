import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: fonts.size.md,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
});

export default styles;
