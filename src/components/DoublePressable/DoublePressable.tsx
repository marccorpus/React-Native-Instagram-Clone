import {useRef, ReactNode} from 'react';
import {Pressable} from 'react-native';

interface DoublePressableProps {
  children: ReactNode;
  onDoublePress: () => void;
}

const DoublePressable = ({children, onDoublePress}: DoublePressableProps) => {
  const lastPress = useRef(0);

  const pressHandler = () => {
    const now = Date.now();

    if (now - lastPress.current <= 500) {
      onDoublePress();
    }

    lastPress.current = now;
  };

  return <Pressable onPress={pressHandler}>{children}</Pressable>;
};

export default DoublePressable;
