import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

// áudio
import BellRing from "../../../assets/sounds/bell_single_ring_zapsplat.mp3";

// componentes globais
import Credits from '../../componentes/Credits';
import StyledButton from '../../componentes/StyledButton';

// componentes
import Relogio from './relogio';
import Schedule from './schedule';

// estilos
import styles from './styles';

export default function Pomodoro() {
    // const [sound, setSound] = React.useState();
    const [time, setTime] = React.useState(10);
    const [onFocusTime, setOnFocusTime] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    // Toca o som
    const playSound = async (time) => {
        console.log("Loading sound...");

        const { sound } = await Audio.Sound.createAsync(BellRing);

        // Toca o som, após intervalo de tempo definido
        setTimeout(async function () {
            console.log('Playing sound!');
            await sound.playAsync();
        }, time);
    }

    // Alternar para o modo de foco
    const toggleFocusTime = (time) => {
        console.log("Modo de foco ativado!");
        setOnFocusTime(!onFocusTime);
        playSound(time);
    }

    // Pausar contagem do tempo

    const togglePause = (isPaused) => {
        console.log("Pausado...");
        setIsPaused(!isPaused);
    }

    // Renderiza componentes
    return (
        <>
            <View style={styles.container}>
                <Text>Bem vindo ao Pomodoro! :)</Text>
                <Text>Bons estudos.</Text>
                <Relogio />
                <Schedule ciclesLength={3} subciclesLength={4} />
                <View style={styles.buttonGroup}>
                    {onFocusTime
                        ?
                        <>
                            <StyledButton
                                title="Pausar"
                                action={() => togglePause(isPaused)}
                                style="secondaryButton"
                            />
                            <StyledButton
                                title="Parar"
                                action={() => toggleFocusTime(time)}
                                style="secondaryButton"
                            />
                        </>
                        : <StyledButton
                            title="Começar"
                            action={() => toggleFocusTime(time)}
                            style="secondaryButton"
                        />
                    }
                </View>
            </View>
            <Credits />
        </>
    );
}