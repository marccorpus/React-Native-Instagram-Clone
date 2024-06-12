import {useState} from 'react';
import {View} from 'react-native';

import UserAvatar from '../../components/UserAvatar';
import ButtonText from '../../components/ButtonText';
import Label from '../../components/Label';
import Input from '../../components/Input';

import styles from './styles';

import user from '../../assets/data/user.json';

const EditProfileScreen = () => {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [website, setWebsite] = useState<string | undefined>();
  const [bio, setBio] = useState<string | undefined>(user.bio);

  const submitHandler = () => {
    console.log(name);
    console.log(username);
    console.log(website);
    console.log(bio);
  };

  return (
    <View style={styles.container}>
      <UserAvatar style={styles.userAvatar} uri={user.image} />
      <ButtonText
        containerStyle={styles.button}
        textStyle={styles.buttonText}
        text="Change Profile Photo"
        onPress={() => {}}
      />

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Label style={styles.label} label="Name" />
          <Input value={name} onChangeText={setName} placeholder="Name" />
        </View>

        <View style={styles.inputContainer}>
          <Label style={styles.label} label="Username" />
          <Input
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
        </View>

        <View style={styles.inputContainer}>
          <Label style={styles.label} label="Website" />
          <Input
            value={website}
            onChangeText={setWebsite}
            placeholder="Website"
          />
        </View>

        <View style={styles.inputContainer}>
          <Label style={styles.label} label="Bio" />
          <Input
            value={bio}
            onChangeText={setBio}
            placeholder="Bio"
            multiline
          />
        </View>
      </View>

      <ButtonText
        containerStyle={styles.button}
        textStyle={styles.buttonText}
        text="Submit"
        onPress={submitHandler}
      />
    </View>
  );
};

export default EditProfileScreen;
