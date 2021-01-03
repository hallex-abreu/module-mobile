import React from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Routes/>
  );
}