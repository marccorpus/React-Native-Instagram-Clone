import {StyleProp, ImageStyle, Image, Pressable} from 'react-native';

import styles from './styles';

interface UserAvatarProps {
  uri: string;
  onPress?: () => void;
  style?: StyleProp<ImageStyle>;
}

const UserAvatar = ({uri, onPress, style}: UserAvatarProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={[styles.image, style]} source={{uri}} />
    </Pressable>
  );
};

export default UserAvatar;
