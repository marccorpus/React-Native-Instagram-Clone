import {StyleSheet} from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  indicatorsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 10,
    gap: 8,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
  },
});

export default styles;
