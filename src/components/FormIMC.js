// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Result from './Result';
import Classification from './classification.js';
import IdealWeight from './idealweight.js';

// Componente principal do formulário de cálculo do IMC
export default function FormIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  // Função para calcular o IMC com base no peso e altura
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Verifica se os valores são válidos
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));
  };

  return (
    // Envolve o componente em um TouchableWithoutFeedback para fechar o teclado ao tocar fora do campo de entrada
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        {/* Campo de entrada para a altura */}
        <Text style={styles.label}>Altura (m):</Text>
        <TextInput  
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Button title="Calcular IMC" onPress={calcularIMC} />

        {/* Exibe o resultado do IMC */}
        {imc && <Result imc={imc} />}

        {/* Exibe a classificação do IMC */}
        {imc && <Classification imc={imc} />}

        {/* Exibe o peso ideal com base na altura */}
        {imc && <IdealWeight height={parseFloat(altura)} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginBottom: 12,
    borderRadius: 5,
  },
});