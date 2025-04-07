import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
    return (
        <View style={styles.container}>
            <Title />
            <FormIMC />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});