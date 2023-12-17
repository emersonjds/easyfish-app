import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';

const HomeScreen: React.FC = () => {

  return (
    <>
      <View
        className='flex-1 mt-10 px-4'
      >
        <View
          className='mb-5'
        >
          <Text
            className='text-4xl font-bold text-gray-800 dark:text-white'
          >
            Noticias do Dia
          </Text>
        </View>

        <ScrollView>
          <View className="max-w-sm bg-white border border-gray-200 mb-5">
            <View
              className='pl-5 pt-3'
            >
              <Text
                className='text-xl font-bold text-gray-800 dark:text-white'
              >
                Aquaponia chega ao RJ
              </Text>
            </View>

            <View className="p-5">
              <Image
                resizeMode='contain'
                style={{
                  width: '100%',
                  height: 110,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  marginBottom: 10
                }}
                source={
                  require(
                    '../../../assets/blog-1.jpg'
                  )
                }
              />

              <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A aquaponia é um sistema de produção de alimentos que combina a criação de peixes com o cultivo de plantas em uma simbiose natural e equilibrada.
              </Text>

              <Button
                color="#5ccaf4"
                title="Saiba mais ... "
                accessibilityLabel="Saiba mais ... "
              />
            </View>
          </View>

          <View className="max-w-sm bg-white border border-gray-200 mb-5">
            <View
              className='px-5 pt-3'
            >
              <Text
                className='text-xl font-bold text-gray-800 dark:text-white'
              >
                Consumo de tilapia duplicará até 2030

              </Text>
            </View>

            <View className="p-5">
              <Image
                resizeMode='contain'
                style={{
                  width: '100%',
                  height: 110,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  marginBottom: 10
                }}
                source={
                  require(
                    '../../../assets/foto-2.jpg'
                  )
                }
              />

              <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A aquaponia é um sistema de produção de alimentos que combina a criação de peixes com o cultivo de plantas em uma simbiose natural e equilibrada.
              </Text>

              <Button
                color="#5ccaf4"
                title="Saiba mais ... "
                accessibilityLabel="Saiba mais ... "
              />
            </View>
          </View>

          <View className="max-w-sm bg-white border border-gray-200 mb-5">
            <View
              className='pl-5 pt-3'
            >
              <Text
                className='text-xl font-bold text-gray-800 dark:text-white'
              >
                EasyFish ganha premio da ONU em 4 ODS's
              </Text>
            </View>

            <View className="p-5">
              <Image
                resizeMode='contain'
                style={{
                  width: '100%',
                  height: 110,
                  resizeMode: 'contain',
                }}
                source={
                  require(
                    '../../../assets/EasyFish.png'
                  )
                }
              />

              <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Plataforma que traz o cultivo de tilapia para comunidades em SP, RJ, MG e ES ganha premio da ONU em 4 ODS's (Objetivos de Desenvolvimento Sustentável)
              </Text>

              <Button
                color="#5ccaf4"
                title="Saiba mais ... "
                accessibilityLabel="Saiba mais ... "
              />
            </View>
          </View>
        </ScrollView>




      </View>
    </>
  )
}

export default HomeScreen;