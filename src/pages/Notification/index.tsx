import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Notification: React.FC = () => {
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
          Notification
        </Text>
      </View>
    </>
  );
}

export default Notification;