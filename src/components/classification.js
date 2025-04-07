import {View, StyleSheet} from 'react-native'

export default function Classification({ imc }) {
  const valor = parseFloat(imc);

  const interpretarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };


  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.texto}>IMC: {imc}</Text>
        <Text style={styles.resultado}>{interpretarIMC()}</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});



