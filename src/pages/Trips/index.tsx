import React from 'react';
import { View, Text } from 'react-native';

const Trips: React.FC = () => {
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
          Trips
        </Text>
      </View>
    </>
  );
}

export default Trips;