import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

//componentes globais
import Credits from '../../componentes/Credits';
import StyledButton from '../../componentes/StyledButton';

// componentes
import Relogio from './relogio';
import Ciclos from './ciclos';

// estilos
import styles from './styles';

export default function Pomodoro() {
    // const [sound, setSound] = React.useState();
    const [time, setTime] = React.useState(1000);

    // Toca o som
    const playSound = async (time) => {
        console.log("Loading sound...");

        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/sounds/bell_single_ring_zapsplat.mp3')
        );

        // Toca o som, após intervalo de tempo definido
        setTimeout(async function () {
            console.log('Playing sound!');
            await sound.playAsync();
        }, time);
    }

    // Renderiza componentes
    return (
        <>
            <View style={styles.container}>
                <Text>Bem vindo ao Pomodoro! :)</Text>
                <Relogio />
                <StyledButton
                    title="Começar"
                    action={() => playSound(time)}
                    style="secondaryButton"
                />
            </View>
            <Credits />
        </>
    );
}