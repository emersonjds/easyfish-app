import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <>
      <View
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
      </View>
    </>
  )
}

export default HomeScreen;