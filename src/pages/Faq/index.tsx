import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { cultivoTilapia } from './data';
import FAQAccordion from './components/FazAccordion';

const FAQScreen = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <>
      <View className="mt-10 flex-1 px-5">
        <Text className="text-2xl font-bold ">Perguntas Frequentes</Text>
        <ScrollView className="p-4">
          {cultivoTilapia.map((faq) => (
            <FAQAccordion
              key={faq.id}
              id={faq.id}
              question={faq.pergunta}
              answer={faq.resposta}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default FAQScreen;
