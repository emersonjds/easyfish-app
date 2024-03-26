import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import { barData, data, lineData, lineData2 } from './data';

const Analises: React.FC = () => {
  return (
    <>
      <StatusBar style="dark" />
      <View className="mt-10 flex-1">
        <ScrollView>
          <View>
            <Text className="text-center text-2xl font-bold">
              Analises da Semana
            </Text>
          </View>

          <View className="mt-5 flex-1 items-center">
            <Text className="text-center text-2xl font-bold">Temperatura</Text>
            <LineChart data={data} areaChart />
          </View>

          <View className="mt-5 flex-1 items-center">
            <Text className="text-center text-2xl font-bold">Ph da Agua</Text>
            <BarChart
              barWidth={22}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>

          <View className="mt-5 flex-1 items-center">
            <Text className="text-center text-2xl font-bold">
              Nivel da Caixa D'agua
            </Text>
            <View>
              <LineChart
                data={lineData}
                data2={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                dataPointsHeight={6}
                dataPointsWidth={6}
                dataPointsColor1="blue"
                dataPointsColor2="red"
                textShiftY={-2}
                textShiftX={-5}
                textFontSize={13}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Analises;
