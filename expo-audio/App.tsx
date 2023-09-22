import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { Audio } from 'expo-av';

// componentes
import Credits from './components/credits';
import CountdownClock from './components/countdownClock';
import styles from './styles';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading sound...");

    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sounds/bell_single_ring_zapsplat.mp3')
    );

    setTimeout(async function () {
      console.log('Playing sound!');
      await sound.playAsync();
    }, 3000);
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text>Bem vindo ao Pomodoro! :)</Text>
        <CountdownClock />
        <Button title="Começar" onPress={() => playSound()} />
        <Credits />
      </View>
    </>
  );
}