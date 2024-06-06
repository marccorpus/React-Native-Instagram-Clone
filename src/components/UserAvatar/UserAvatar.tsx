import {Image} from 'react-native';

import styles from './styles';

interface UserAvatarProps {
  uri: string;
}

const UserAvatar = ({uri}: UserAvatarProps) => {
  return <Image style={styles.image} source={{uri}} />;
};

export default UserAvatar;
