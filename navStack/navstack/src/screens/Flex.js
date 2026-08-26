import { View, Text, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.txt}>Esquerda</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.txt}>Centro</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.txt}>Direita</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Faz o container expandir e ocupar todo o espaço disponível na tela
    flex: 1,

    // Define a cor de fundo do container principal como um cinza bem claro
    backgroundColor: "#f5f5f5",

    // Organiza os elementos filhos em uma coluna (de cima para baixo)
    flexDirection: "column",
  },
  left: {
    // Ocupa 1 parte do espaço flexível em relação aos outros elementos
    flex: 1,

    // Define a cor de fundo como roxo
    backgroundColor: "#6200ee",

    // Centraliza o conteúdo verticalmente dentro dessa área
    justifyContent: "center",

    // Centraliza o conteúdo horizontalmente dentro dessa área
    alignItems: "center",
  },
  right: {
    // Ocupa 1 parte do espaço flexível
    flex: 1,

    // Nota: Há um erro de sintaxe no código original ("303dac6").
    // O correto para uma cor Hexadecimal seria "#03dac6" (azul/verde água)
    backgroundColor: "#03dac6",

    // Centraliza o conteúdo verticalmente
    justifyContent: "center",

    // Centraliza o conteúdo horizontalmente
    alignItems: "center",
  },
  center: {
    // Ocupa 6 partes do espaço flexível (será 6x maior que o 'left' ou 'right')
    flex: 6,

    // Define a cor de fundo como um cinza médio
    backgroundColor: "#666",

    // Centraliza o conteúdo verticalmente
    justifyContent: "center",

    // Centraliza o conteúdo horizontalmente
    alignItems: "center",
  },
  txt: {
    // Define a cor do texto como branca
    color: "white",

    // Deixa o texto em negrito
    fontWeight: "bold",

    // Alinha o texto no centro do seu próprio bloco
    textAlign: "center",

    // Define o tamanho da fonte para 14 pixels
    fontSize: 14,
  },
});
