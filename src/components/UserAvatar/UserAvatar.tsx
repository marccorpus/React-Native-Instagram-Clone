import {Image, Pressable} from 'react-native';

import styles from './styles';

interface UserAvatarProps {
  uri: string;
  onPress?: () => void;
}

const UserAvatar = ({uri, onPress}: UserAvatarProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.image} source={{uri}} />
    </Pressable>
  );
};

export default UserAvatar;
