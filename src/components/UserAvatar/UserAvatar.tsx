import {StyleProp, ImageStyle, Image, Pressable} from 'react-native';

import styles from './styles';

interface UserAvatarProps {
  style?: StyleProp<ImageStyle>;
  uri: string;
  onPress?: () => void;
}

const UserAvatar = ({style, uri, onPress}: UserAvatarProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={[styles.image, style]} source={{uri}} />
    </Pressable>
  );
};

export default UserAvatar;
