import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if(isNaN(n1) || isNaN(n2)){
      setResultado("Por favor, insira números válidos.");
    }else{
      setResultado(n1 + n2);
    }
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Soma</Text>
        <TextInput 
          style={styles.caixaTexto}
          placeholder="Digite o primeiro número"
          keyboardType='numeric'
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput 
          style={styles.caixaTexto}
          placeholder="Digite o segundo número"
          keyboardType='numeric'
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.buttonContainer}>
          <Button title='Somar' onPress={somar}></Button>
        </View>
      <StatusBar style="auto" />
      {
        resultado !== null && (
          <Text style={styles.resultado}>Resultado: {resultado}</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  caixaTexto:{
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer:{
    width: '60%',
    marginVertical: 10,
  }, 
  resultado:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  }
});
