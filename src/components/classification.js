import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que exibe a classificação do IMC com base no valor calculado
export default function Classification({ imc }) {
  
  // Função que retorna a classificação com base no valor do IMC
  const getClassification = () => {
    if (!imc) return '';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade grau 1';
    if (imc < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3 (obesidade mórbida)';
  };

  // Renderiza o componente com a classificação do IMC
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Classificação do IMC:</Text>
      <Text style={styles.value}>{getClassification()}</Text>
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
    color: '#0077cc',
  },
});
