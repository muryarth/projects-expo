import React, { useState } from "react";
import { Text, View } from "react-native";
import { Audio } from "expo-av";

// áudio
import BellRing from "../../../assets/sounds/bell_single_ring_zapsplat.mp3";

// componentes globais
import Credits from "../../componentes/Credits";
import StyledButton from "../../componentes/StyledButton";

// estilos
import styles from "./styles";

export default function Pomodoro() {
  const [time, setTime] = React.useState(10);

  // Toca o som
  const playSound = async (time) => {
    console.log("Loading sound...");
    const { sound } = await Audio.Sound.createAsync(BellRing);

    // Toca o som, após intervalo de tempo definido
    setTimeout(async function () {
      console.log("Playing sound!");
      await sound.playAsync();
    }, time);
  };

  // Renderiza componentes
  return (
    <>
      <View style={styles.container}>
        <Text>Tocador de som:</Text>
        <StyledButton
          title="Acionar"
          action={() => playSound(time)}
          style="secondaryButton"
        />
      </View>
      <Credits />
    </>
  );
}
