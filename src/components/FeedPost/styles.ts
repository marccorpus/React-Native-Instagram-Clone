import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  row: {
    marginVertical: 6,
  },
  userName: {
    fontSize: fonts.size.normal,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 12,
  },
  moreIcon: {
    color: colors.gray,
    fontSize: fonts.size.xl,
    marginLeft: 'auto',
  },

  postImage: {
    width: '100%',
    aspectRatio: 1,
  },

  footer: {
    padding: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionIcon: {
    color: colors.black,
    fontSize: fonts.size.xxl,
  },
  bookmarkIcon: {
    marginLeft: 'auto',
  },
  isLiked: {
    color: colors.red,
  },
  likes: {
    color: colors.black,
  },
  description: {
    color: colors.black,
    lineHeight: 20,
  },
  viewAllComments: {
    marginTop: 10,
  },
  createdAt: {
    color: colors.gray,
  },
});

export default styles;
