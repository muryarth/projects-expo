import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function countdownClock() {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("30");
    const [seconds, setSeconds] = useState("00");

    return (
        <View>
            <Text>{`${hours}:${minutes}:${seconds}`}</Text>
        </View>
    )
} 