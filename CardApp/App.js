import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('./assets/photos/profile.png')} />
      <Text style={styles.text1}>Welcome back,</Text>
      <Text style={styles.text2}>Samuel Mensah</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1:{
    position: 'absolute',
    top: 70,
    left: 30,
  },
  text1:{
    position: 'absolute',
    top: 70,
    left: 90,
    fontSize: 16,
    color: 'grey',
  },
  text2:{
    position: 'absolute',
    top: 95,
    left: 90,
    fontSize: 18,
  },
});
