import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Notification: React.FC = () => {
  return (
    <>
      <View
        className='flex-1 justify-center items-center'
      >
        <View className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Text >
            <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aviso de Comida</Text>
          </Text>
          <Text className="mt-3 mb-3 font-normal text-gray-700 ">Nao se esqueça de alimentar seus alivinos, o crescimento e engorda deles precisa desse cuidado</Text>
          <Text className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
            Marcar como feito
          </Text>
        </View>
      </View>
    </>
  );
}

export default Notification;