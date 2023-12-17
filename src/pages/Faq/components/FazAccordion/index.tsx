import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

interface FAQAccordionProps {
  id: number;
  question: string;
  answer: string;
  activeQuestion: number;
  setActiveQuestion: (id: number) => void;

}

const FAQAccordion = ({ id, question, answer, activeQuestion, setActiveQuestion }) => {
  const isCollapsed = id !== activeQuestion;

  const toggleAccordion = () => {
    setActiveQuestion(id);
  };

  return (
    <View className="border-b border-gray-200">
      <TouchableOpacity onPress={toggleAccordion} className="p-4">
        <Text className="text-lg font-bold">{question}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View className="p-4">
          <Text className="text-sm">{answer}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default FAQAccordion;