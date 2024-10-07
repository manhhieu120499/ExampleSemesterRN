import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <Text>Header</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'green'}}>
        <Text>body</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'yellow'}}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
