import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Componente que exibe o resultado do IMC
export default function Result({ imc }) {
    return (
        <View style={styles.container}>
            <Text style={styles.result}>Seu IMC: {imc}</Text>
        </View>
    );
}

// Estilização do componente
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});