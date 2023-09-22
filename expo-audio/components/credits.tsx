import React from 'react';
import { Linking, Text, StyleSheet } from 'react-native';

export default function credits() {
    return (
        <Text style={styles.hyperlink}
            onPress={() => {
                Linking.openURL('https://www.zapsplat.com');
            }}
        >
            Sound effects obtained from zapsplat.com
        </Text>
    )
}

const styles = StyleSheet.create({
    hyperlink: {
        color: "blue",
    }
});