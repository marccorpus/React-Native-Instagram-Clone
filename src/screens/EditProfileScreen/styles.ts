import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  userAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  button: {
    marginVertical: 12,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.md,
    alignSelf: 'center',
  },
  inputsContainer: {
    marginVertical: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  label: {
    width: 100,
  },
});

export default styles;
