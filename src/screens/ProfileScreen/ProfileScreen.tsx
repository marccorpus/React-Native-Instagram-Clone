import {View, FlatList, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ProfileHeader from '../../components/ProfileHeader';

import styles from './styles';

import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={user.posts}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: item.images ? item.images[0] : item.image}}
            />
            {item.images && (
              <MaterialIcons style={styles.collections} name="collections" />
            )}
          </View>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.spacing}
        contentContainerStyle={styles.spacing}
        ListHeaderComponent={() => <ProfileHeader user={user} />}
      />
    </View>
  );
};

export default ProfileScreen;
