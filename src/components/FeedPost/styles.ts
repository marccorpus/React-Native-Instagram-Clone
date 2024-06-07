import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

const styles = StyleSheet.create({
  userName: {
    fontSize: fonts.size.normal,
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
    alignItems: 'center',
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
    color: colors.danger,
  },
  postNoOfLikes: {
    color: colors.black,
    marginTop: 8,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  postDescription: {
    color: colors.black,
    marginTop: 8,
    lineHeight: 20,
  },
  togglePostDescription: {
    marginTop: 4,
  },
  viewAllComments: {
    marginTop: 8,
  },
  createdAt: {
    color: colors.gray,
    marginTop: 8,
  },
});

export default styles;
