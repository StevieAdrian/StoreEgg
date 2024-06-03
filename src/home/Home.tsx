import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeRow from '../assets/components/HomeRow';
import { RootStackScreenProps } from '../navigation/types';
import ItemList from '../assets/views/components/searchComponent/ItemList';

export type HomeParams = undefined;

type Home = {
  image: string;
}

const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
    const [dataStore, setDataStore] = useState (null);
    const [myCoins, setMyCoins] = useState(500);
    // const navigation = useNavigation();

    const getData = async () => {
        const response = await fetch ("https://fakestoreapi.com/products")
        const storeResponse = await response.json()
        // console.log(storeResponse)
        setDataStore(storeResponse)
    }

    useEffect(()=>{
        getData();
    }, )
  
    const handleBuy = (price: number) => {
      if (myCoins >= price){
        setMyCoins(myCoins - price);
      } else {
        <Text>Maaf Saldo Tidak Cukup</Text>
      }
    };

    const handleSell = (price: number) => {
      setMyCoins(myCoins + price);
    }

    const items: string[] = [

    ];

  return (
    
    <>
      <View style={styles.search}>
        <ItemList data={items} id={''} />
      </View>
      <View style={styles.cardContainer}>

        <TouchableOpacity onPress={() => {
          navigation.navigate('Product')
        }}>
          <View style={styles.card}>
            <Text style={styles.cardText}>My Products › </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.cardCoin}> 
          <Text style={styles.coinText}>My coins: {myCoins}</Text>
        </View>
      </View>
      
      <ScrollView style={styles.background2}>
        <View>
          <Text style={styles.availTitle} >Available Products</Text>
        </View>

        {!!dataStore ? (
          <FlatList
            data={dataStore}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                navigation.navigate('Detail', {
                  id: item.id,
                  image: item.image,
                  title: item.title,
                  price: item.price,
                  description: item.description,
                  url: item.url,
                  // handleBuy: handleBuy,
                  // handleSell: handleSell,
                });
              } }>

                <HomeRow title={item.title} image={item.image} price={item.price} url={''} />
              </TouchableOpacity>
            )} />
            ) : (
          <View style={styles.renderCont}>
            <ActivityIndicator size={"large"} />
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  search:{
    color: 'white',
    backgroundColor: '#8775A9',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 3,
  },

  background2:{
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    position: 'relative',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8775A9',
  },

  card: {
    borderRadius: 8,
    width: 170,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'white',
  },
  
  cardCoin: {
    position: 'absolute',
    right: 17,
    top: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 90,
    backgroundColor: 'white',
  },

  coinText: {
    color: '#8775A9',
    fontSize: 25,
    fontWeight: 'bold',
  },

  cardText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto',
  },

  availTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },

  background:{
    // flex: 1,
  },
    
  header:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    padding: 9,
  },

  renderCont:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  icon: {
    height: 50,
    width: 50,
  },
})

export default Home