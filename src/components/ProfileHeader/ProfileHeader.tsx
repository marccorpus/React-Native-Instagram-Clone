import {View, Image, Text} from 'react-native';

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
        <Image style={styles.userAvatar} source={{uri: user.image}} />

        <View style={styles.statsContainer}>
          <Text style={styles.statsNumber}>{user.postsCount}</Text>
          <Text style={styles.statsText}>Posts</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsNumber}>{user.followersCount}</Text>
          <Text style={styles.statsText}>Followers</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsNumber}>{user.followingCount}</Text>
          <Text style={styles.statsText}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>

      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.actionsContainer}>
        <ButtonOutline text="Edit Profile" onPress={() => {}} />
        <ButtonOutline text="Another Button" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileHeader;
