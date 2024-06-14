import {View, Text} from 'react-native';

import styles from './styles';

interface StatsProps {
  value: number;
  label: string;
}

const Stats = ({value, label}: StatsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Stats;
