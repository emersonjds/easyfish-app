import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';


// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 30, color: '#000' }}
        >
          HomeScreen
        </Text>
      </View> */}
      <View className="flex-1 items-center justify-center bg-lime-500">
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </>
  )
}

export default HomeScreen;