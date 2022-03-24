import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/screens/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Cesta {...mock} />
      <StatusBar />
    </SafeAreaView>
  );
}