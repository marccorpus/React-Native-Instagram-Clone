import {View} from 'react-native';

import GridView from '../../components/GridView';
import ProfileHeader from '../../components/ProfileHeader';

import styles from './styles';

import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  const gridViewItems = user.posts.map(post => {
    return {
      id: post.id,
      image: post.images ? post.images[0] : post.image,
      isCollection: post.images ? true : false,
    };
  });

  return (
    <View style={styles.container}>
      <GridView
        items={gridViewItems}
        listHeaderComponent={() => <ProfileHeader user={user} />}
      />
    </View>
  );
};

export default ProfileScreen;
