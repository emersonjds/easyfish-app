import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

const Store: React.FC = () => {

  return (
    <>
      <View className='flex-1 mt-10 px-4'>
        <ScrollView>

          <View className="bg-white p-4 mb-4 rounded-md">
            <Image source={require('../../../assets/joelho.png')}
              style={{ width: 200, height: 200, alignSelf: 'center' }}
              resizeMode='contain'
            />
            <Text className="text-lg font-bold mb-2">Nome Produto</Text>
            <Text className="text-gray-600">$22</Text>
            <TouchableOpacity onPress={() => { }} className="mt-4 bg-blue-500 py-2 rounded-md">
              <Text className="text-white text-center">Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white p-4 mb-4 rounded-md">
            <Image source={require('../../../assets/joelho.png')}
              style={{ width: 200, height: 200, alignSelf: 'center' }}
              resizeMode='contain'
            />
            <Text className="text-lg font-bold mb-2">Nome Produto</Text>
            <Text className="text-gray-600">$22</Text>
            <TouchableOpacity onPress={() => { }} className="mt-4 bg-blue-500 py-2 rounded-md">
              <Text className="text-white text-center">Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white p-4 mb-4 rounded-md">
            <Image source={require('../../../assets/joelho.png')}
              style={{ width: 200, height: 200, alignSelf: 'center' }}
              resizeMode='contain'
            />
            <Text className="text-lg font-bold mb-2">Nome Produto</Text>
            <Text className="text-gray-600">$22</Text>
            <TouchableOpacity onPress={() => { }} className="mt-4 bg-blue-500 py-2 rounded-md">
              <Text className="text-white text-center">Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </>
  )
}

export default Store;