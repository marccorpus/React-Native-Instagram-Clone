import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  descriptionContainer: {
    flex: 1,
  },
  description: {
    color: colors.black,
  },
  subDescriptionContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  subDescription: {
    color: colors.gray,
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
