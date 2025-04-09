import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que calcula e exibe o peso ideal mínimo e máximo com base na altura
export default function IdealWeight({ height }) {
  // Calcula os pesos ideais apenas se a altura for válida
  const calculateIdealWeight = () => {
    if (!height || isNaN(height)) return { min: 0, max: 0 };
    const min = (18.5 * height * height).toFixed(2);
    const max = (24.9 * height * height).toFixed(2);
    return { min, max };
  };

// valores mínimo e máximo do peso ideal
  const { min, max } = calculateIdealWeight();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peso Ideal:</Text>
      <Text style={styles.value}>Mínimo: {min} kg</Text>
      <Text style={styles.value}>Máximo: {max} kg</Text>
    </View>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    color: '#28a745',
  },
});
