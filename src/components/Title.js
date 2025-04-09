import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Componente que exibe o título da aplicação
export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>
    );
}

// Estilização do componente
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
