import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { Cesta } from "./src/telas/Cesta";
import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "MontserratRegular": Montserrat_400Regular,
          "MontserratBold": Montserrat_700Bold
        });

        // Artificially delay for two seconds to simulate a slow loading
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    //flex: 1 define que o flex seja do tamanho da tela inteira
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

// o operador "..." tira a camada mais externa do objeto,
// fazendo com que, no exemplo acima, cada propriedade do
// objeto "mock" seja passada como parâmetro para o comp-
// onente cesta

// usa-se {...mock} ao invés de:
// topo = {mock.topo} detalhes = {mock.detalhes}