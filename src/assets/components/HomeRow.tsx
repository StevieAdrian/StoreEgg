import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Products from './Products';

export type HomeRowProps = {
    title: string;
    price: string;
    image: string;
    url: string;
}

const HomeRow = ({title, price, image}: HomeRowProps) => {

  // const [imageUrl, setImageUrl] = useState("")

  return (
    // <TouchableOpacity>
      <View style={styles.card}>
        {/* <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={styles.icon}/> */}
        <Image source={{uri: image}} style={styles.icon}/>
        <View style={styles.textContainer}>
          <Text style={styles.titleText} onPress={() => console.log("Pressed") } >{title}</Text>
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
    // </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    flex: 1,
  },

  icon:{
    height: 80,
    width: 80,
  },

  card: {
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    // width: '100%',
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'black',
    marginLeft: 16,
  },

  priceText: {
    color: 'black',
    fontSize: 17,
    marginTop: 3,
    marginLeft: 16,
  }
})

export default HomeRow
