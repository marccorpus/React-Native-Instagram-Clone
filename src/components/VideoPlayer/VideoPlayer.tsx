import {useState} from 'react';
import {View, Pressable} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

interface VideoProps {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: VideoProps) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSoundHandler = () => setIsMuted(v => !v);

  return (
    <View>
      <Video
        style={styles.video}
        source={{uri}}
        repeat
        muted={isMuted}
        paused={paused}
      />

      <Pressable style={styles.soundContainer} onPress={toggleSoundHandler}>
        <Feather
          style={styles.soundIcon}
          name={isMuted ? 'volume-x' : 'volume-2'}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
