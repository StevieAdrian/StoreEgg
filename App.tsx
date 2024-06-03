import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/home/Home';
import Detail from './src/assets/views/components/redux/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/assets/redux/store';
import { CoinsProvider } from './src/home/Coins';
import Product from './src/assets/views/products/Product';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Product" component={Product}/>
      {/* <Stack.Screen name="Exit" component={Exit}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
