import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ResultadoDetalhado from './ResultadoDetalhado'; 

export default function FormIMC() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (weight && height) {
      const imcCalculado = (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2);
      setImc (imcCalculado);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />

      {imc && <ResultadoDetalhado imc={imc} />}
      {
        imc && <Classification imc ={imc} /> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});