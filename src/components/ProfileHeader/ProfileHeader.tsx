import {View, Text} from 'react-native';

import UserAvatar from '../UserAvatar';
import Stats from '../Stats';
import UserName from '../UserName';
import ButtonOutline from '../ButtonOutline';

import styles from './styles';

import {IUser} from '../../types/models';

interface ProfileHeaderProps {
  user: IUser;
}

const ProfileHeader = ({user}: ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <UserAvatar style={styles.userAvatar} uri={user.image} />

        <Stats value={user.postsCount ?? 0} label="Posts" />

        <Stats value={user.followersCount ?? 0} label="Followers" />

        <Stats value={user.followingCount ?? 0} label="Following" />
      </View>

      <UserName style={styles.name} name={user.name ?? ''} />

      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.buttonsContainer}>
        <ButtonOutline
          style={styles.button}
          text="Edit Profile"
          onPress={() => {}}
        />
        <ButtonOutline
          style={styles.button}
          text="Another Button"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
