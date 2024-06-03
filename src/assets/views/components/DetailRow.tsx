import React from 'react';
import { StyleSheet, Text } from 'react-native';

type DetailRowProps = {
    title: string;
    description: string;
    price?: string;
    showPriceAndDescription?: boolean;
};

const DetailRow = ({ title, description, price, showPriceAndDescription = true}: DetailRowProps) => {
    return (
    <>
        <Text style={styles.title}>{title}</Text>
            {showPriceAndDescription && price !== undefined && ( 
                <>
                    <Text style={styles.price}>Price</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{description}</Text>
                </>
            )}
    </>
    );
};

export default DetailRow;
export const getTitle = (props: DetailRowProps) => props.title;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },

    descriptionTitle: {
        paddingLeft: 15,
        paddingTop: 8,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold', 
    },
    description: {
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        textTransform: 'capitalize',
        color: 'black',
    },

    price: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'black',
        fontWeight: '400',
    }
});