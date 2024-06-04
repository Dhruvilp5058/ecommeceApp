import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProductDetails = ({ product }) => (
    <View style={{ paddingLeft: 20 }}>
        <Text style={{ color: 'black', fontSize: 18 }}>Title: {product.title}</Text>
        <Text style={{ color: 'black', fontSize: 18 }}>Description: {product.description}</Text>
        <Text style={{ color: 'black', fontSize: 18 }}>Price: ${product.price}</Text> 
    </View>
);

const LearnCart = () => {
    const [cartData, setCartData] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => { 
        fetchData();
        cart();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const newData = response.data.products;
            console.log(newData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const cart = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/carts');
            setCartData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProductDetails = async (productId) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            const product = response.data;
            return product;
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };

    const renderProductDetails = async (productId) => {
        if (!productDetails[productId]) {
            try {
                const product = await fetchProductDetails(productId);
                setProductDetails(prevState => ({
                    ...prevState,
                    [productId]: product
                }));
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Cart ID: {item.id}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>User ID: {item.userId}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>Date: {new Date(item.date).toLocaleDateString()}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>Products:</Text>
            {item.products.map((product, index) => (
                <View key={index} style={{ paddingLeft: 10 }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Product ID: {product.productId}</Text>
                    <Text style={{ color: 'black', fontSize: 20 }}>Quantity: {product.quantity}</Text>
                    {/* Fetch and display product details */}
                    {renderProductDetails(product.productId)}
                    {productDetails[product.productId] && (
                        <ProductDetails product={productDetails[product.productId]} />
                    )}
                </View>
            ))}
        </View>
    );

    return (
        <View>
            <Text style={{ color: 'black', fontSize: 20 }}>LearnCart</Text>
            <FlatList
                data={cartData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default LearnCart;
