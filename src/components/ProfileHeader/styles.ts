import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statsContainer: {
    alignItems: 'center',
  },
  statsNumber: {
    color: colors.black,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
  },
  statsText: {
    color: colors.gray,
  },
  name: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    marginVertical: 8,
  },
  bio: {
    color: colors.gray,
    lineHeight: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
  },
});

export default styles;
