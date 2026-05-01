import { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class App extends Component {
  render() {
    let variavel = 'Exibindo variável.';
    
    return (
      <View style={style.container}>
        <Image 
          source={{ uri: 'https://www.pudim.com.br/pudim.jpg' }} 
          style={{ width: 300, height: 250 }} 
        />
        <Text style={style.txt}>Olá Mundo novamente!!!</Text>
        <Text style={style.txt1}>{variavel}</Text>
      </View>
    ); 
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1, // determina a divisão proporcional do espaço de acordo com valor atribuído
    backgroundColor: '#ccc', // background-color no CSS e backgroundColor no RS
    alignItems: 'center', // Centraliza os filhos de cima para baixo (flex-start, flex-end)
    justifyContent: 'center', // Centraliza os filhos da esquerda para a direita (flex-start, flex-end)
  },
  txt:{
    fontSize: 30,
    fontFamily: "Arial",
  },
  txt1:{
    fontSize: 30,
    fontFamily: "Hélvetica",
  }
});

export default App;