import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
