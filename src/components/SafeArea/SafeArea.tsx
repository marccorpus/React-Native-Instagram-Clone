import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

interface SafeAreaProps {
  children: ReactNode;
}

const SafeArea = ({children}: SafeAreaProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeArea;
