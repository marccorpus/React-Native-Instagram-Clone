import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    padding: 8,
  },
  userAvatar: {
    marginRight: 12,
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: fonts.size.md,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingRight: 56,
    paddingVertical: 13,
  },
  button: {
    position: 'absolute',
    right: 12,
    top: 14,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.md,
  },
});

export default styles;
