import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard = ({ imageUrl, title, price, onAddToCart }: ProductCardProps) => {
    return (
        <View className="bg-white p-4 mb-4 rounded-md shadow-md">
            <Image source={{ uri: imageUrl }} className="w-full h-64 mb-4 rounded-md" />
            <Text className="text-lg font-bold mb-2">{title}</Text>
            <Text className="text-gray-600">${price.toFixed(2)}</Text>
            <TouchableOpacity onPress={onAddToCart} className="mt-4 bg-blue-500 p-2 rounded-md">
                <Text className="text-white text-center">Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductCard;