import SafeArea from './src/components/SafeArea';

import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <SafeArea>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <EditProfileScreen /> */}
      <ProfileScreen />
    </SafeArea>
  );
};

export default App;
