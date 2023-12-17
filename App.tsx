import { StatusBar } from 'expo-status-bar';


import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/icon.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/icon.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/icon.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function App() {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image}
          style={{
            resizeMode: 'contain',
            width: 200,
            height: 200,

          }}
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };




  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <AppIntroSlider
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      data={slides}
      renderItem={renderItem}
    // renderDoneButton={this._renderDoneButton}
    // renderNextButton={this._renderNextButton}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});