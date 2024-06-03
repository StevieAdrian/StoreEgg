import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../redux/hook';

type ProductProps = {
  // title: string;
  // description: string;
  // price?: string;
  // showPriceAndDescription?: boolean;
};

// const Product = ({title, description, price, showPriceAndDescription = true}: ProductProps) => {
  // const purchasedProducts = useAppSelector((state) => state.product); 
const Product = () => {
  return (
  <>
    <Text>tes</Text>
    {/* <Text>{title}</Text>
        {showPriceAndDescription && price !== undefined && ( 
            <>
                <Text>Price</Text>
                <Text>${price}</Text>
                <Text>Description</Text>
                <Text>{description}</Text>
            </>
        )} */}
    </>
    // <View>
    //   <Text>My Products</Text>
    //   {purchasedProducts.length > 0 ? (
    //     purchasedProducts.map((product, index) => (
    //       <View key={index}>
    //         <Text>{product}</Text>
    //       </View>
    //     ))
    //   ) : (
    //     <Text>Belum ada Produk yang dibeli.</Text>
    //   )}
    // </View>
    
  );
};
export default Product;
