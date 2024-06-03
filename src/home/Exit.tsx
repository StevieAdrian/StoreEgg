import React from 'react';
import { Alert, View, Button, StyleSheet } from 'react-native';

const Exit = () => {
    const handleExit = () => {
        Alert.alert(
        'Exit',
        'Mau Keluar?',
        [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },{
        text: 'OK',
        },
        ],{ cancelable: false });
    };

    return (
        <View>
        <Button title="Exit" onPress={handleExit} />
        </View>
    );
};


export default Exit;
