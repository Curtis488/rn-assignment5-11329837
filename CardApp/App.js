import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('./assets/photos/profile.png')} />
      <Text style={styles.text1}>Welcome back,</Text>
      <Text style={styles.text2}>Samuel Mensah</Text>
      <View style={styles.search}>
        <Icon name="magnify" size={24}/>
        </View>
        <Image style={styles.img2} source={require('./assets/photos/Card.png')}/>
        <Image style={styles.img3} source={require('./assets/photos/send.png')}/>
        <Text style={styles.text3}>Sent</Text>
        <Image style={styles.img4} source={require('./assets/photos/recieve.png')}/>
        <Text style={styles.text4}>Recieve</Text>
        <Image style={styles.img5} source={require('./assets/photos/loan.png')}/>
        <Text style={styles.text5}>Loan</Text>
        <Image style={styles.img6} source={require('./assets/photos/topUp.png')}/>
        <Text style={styles.text6}>Topup</Text>
        <Text style={styles.text7}>Transaction</Text>
        <Text style={styles.text8}>See All</Text>

        <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="grey" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card" size={24} color="grey" />
          <Text style={styles.navText}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chart-bar" size={24} color="grey" />
          <Text style={styles.navText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog" size={24} color="grey" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>

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
  search:{
    position: 'absolute',
    top: 85,
    right: 40,
  },
  img2:{
    position: 'absolute',
    top: 170,
    left: 30,
  },
  img3:{
    position: 'absolute',
    top: 410,
    left: 70,
  },
  text3:{
    position: 'absolute',
    top: 450,
    left: 65,
  },
  img4:{
    position: 'absolute',
    top: 410,
    left: 150,
  },
  text4:{
    position: 'absolute',
    top: 450,
    left: 135,
  },
  img5:{
    position: 'absolute',
    top: 410,
    left: 230,
  },
  text5:{
    position: 'absolute',
    top: 450,
    left: 225,
  },
  img6:{
    position: 'absolute',
    top: 410,
    left: 310,
  },
  text6:{
    position: 'absolute',
    top: 450,
    left: 300,
  },
  text7:{
    position: 'absolute',
    top: 500,
    left: 40,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text8:{
    position: 'absolute',
    top: 500,
    left: 300,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'grey',
  },
});
