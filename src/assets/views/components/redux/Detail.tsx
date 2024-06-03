import { ActivityIndicator, Button, Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeRow from '../../../components/HomeRow';
import Home from '../../../../home/Home';
import { RootStackParamList, RootStackScreenProps } from '../../../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import DetailRow, { getTitle } from '../DetailRow';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { add, remove } from '../../../views/products/redux/productSlice';

export type DetailParams = {
        id: string;
        image: string;
        title: string;
        description: string;
        price: string;
        url: string;
}

const Detail = ({route, navigation}: RootStackScreenProps<'Detail'>) => {
    const [dataStore, setDataStore] = useState (null);
    const [isBuyModalVisible, setBuyModalVisible] = useState(false);
    const [isSellModalVisible, setSellModalVisible] = useState(false);
    const dispatch = useAppDispatch();
    const url = route.params.url;
    const idu = route.params.id;
    // const isProduct = useAppSelector((state) => state.product.product.includes(idu));
    // const isProduct = useAppSelector((state) => state.product.product.includes(url));

    const toggleBuyModal = () => {
        setBuyModalVisible(!isBuyModalVisible);
    };

    const toggleSellModal = () => {
        setSellModalVisible(!isSellModalVisible);
    };

    const getData = async () => {
        const response = await fetch ("https://fakestoreapi.com/products")
        const storeResponse = await response.json()
        setDataStore(storeResponse)
    }

    const handleBuy = () => {
        dispatch(add(route.params.id));
        toggleBuyModal();
    }

    const handleSell = () => {
        dispatch(remove(route.params.id));
        toggleSellModal();
    }
    
    useEffect(()=>{
        getData();
    }, )

    return (
    <ScrollView style={styles.container}>
        <DetailRow title={route.params.title} description={route.params.description} />
            <Image 
                source={{uri: route.params.image}}
                style={styles.icon}
            />
            <View style={styles.line} />
        <DetailRow title={route.params.title} price={route.params.price} description={route.params.description} />           
        
        <TouchableOpacity style={styles.buyTransaction} onPress={()=> {toggleBuyModal();}}>
            <TouchableOpacity onPress={() => { 
                dispatch(add(url));
                toggleBuyModal();
                // handleBuy(route.params.id);
                }}>
            <Text style={styles.transactionText}>Buy</Text>
            <Modal visible={isBuyModalVisible} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.popTitle}>Success!</Text>
                        <View style={styles.popDescContainer}>
                            <Text style={styles.popDesc}>
                                {getTitle({ title: route.params.title, description: route.params.description })}
                                <Text> was bought successfully!</Text>
                                <Text>{'\n'}Your current balance is</Text>
                            </Text>
                        </View>
                        <Text onPress={toggleBuyModal} style={styles.popConfirm}>Ok</Text>
                    </View>
                </View>
            </Modal>
            </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sellTransaction} onPress={() => {toggleSellModal();}}>
            <TouchableOpacity onPress={() => { 
                dispatch(remove(url));
                toggleSellModal();
                }}>
            <Text style={styles.transactionText}>Sell</Text>
            <Modal visible={isSellModalVisible} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalView}>
                        <Text style={styles.popTitle}>Success!</Text>
                        <View style={styles.popDescContainer}>
                            <Text style={styles.popDesc}>
                                {getTitle({ title: route.params.title, description: route.params.description })}
                                <Text> was sold successfully!</Text>
                                <Text>{'\n'}Your current balance is</Text>
                            </Text>
                        </View>
                        <Text onPress={toggleSellModal} style={styles.popConfirm}>Ok</Text>
                    </View>
                </View>
            </Modal>
            </TouchableOpacity>
        </TouchableOpacity>  
    </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    icon: {
        alignSelf: 'center', 
        marginTop: 20,
        height: 300,
        width: 300,
    },

    line: {
        marginTop: 15,
        marginLeft: 18,
        marginRight: 18,
        padding: 0.9,
        flex: 1, 
        height: 1, 
        backgroundColor: 'grey'
    },

    buyTransaction: {
        marginTop: 25,
        borderRadius: 12,
        alignSelf: 'center',
        width: 350,
        height: 65,
        backgroundColor: '#8775A9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    
    sellTransaction: {
        marginTop: 25,
        borderColor: 'black',
        borderRadius: 12,
        alignSelf: 'center',
        width: 350,
        height: 65,
        backgroundColor: '#8775A9',
        color: '#8775A9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },

    transactionText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    modalView: {
        backgroundColor: 'white',
        width: 300,
        height: 200,
        borderRadius: 8,
        alignItems: 'center',
    },
    
    popTitle: {
        position: 'absolute',
        top: 30,
        left: 40,
        fontWeight: 'bold',
        fontSize: 23,
        color: 'black',
    },

    popDescContainer: {
        position: 'absolute',
        maxWidth: 250,
        left: 40,
        top: 70,
    },

    popDesc: {
        fontSize: 15,
        color: 'black',
    },

    popConfirm: {
        position: 'absolute',
        bottom: 25,
        right: 30,
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold',
    },
})

export default Detail