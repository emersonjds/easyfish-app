import React from 'react';
import { View, Text } from 'react-native';

const Notification: React.FC = () => {
  return (
    <>
      <View
        className='flex-1 mt-10 p-4'
      >
        <View className="max-w-sm p-6 bg-white border rounded mb-5 ">
          <Text >
            <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aviso de Comida</Text>
          </Text>
          <Text className="mt-3 mb-3 font-normal text-gray-700 ">Nao se esqueça de alimentar seus alivinos, o crescimento e engorda deles precisa desse cuidado</Text>
          <Text className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
            Saiba Mais
          </Text>
        </View>

        <View className="max-w-sm p-6 bg-white border rounded mb-5">
          <Text >
            <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alerta - Nivel de Água</Text>
          </Text>
          <Text className="mt-3 mb-3 font-normal text-gray-700 ">
            O nivel de agua esta baixo, por favor verifique
          </Text>
          <Text className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg">
            Saiba Mais
          </Text>
        </View>

        <View className="max-w-sm p-6 bg-white border rounded mb-5">
          <Text >
            <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Controle de pH</Text>
          </Text>
          <Text className="mt-3 mb-3 font-normal text-gray-700 ">
            Mantenha sua água com PH neutro, isso facilita o engorde das tilapias
          </Text>
          <Text className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
            Saiba Mais
          </Text>
        </View>
      </View>
    </>
  );
}

export default Notification;