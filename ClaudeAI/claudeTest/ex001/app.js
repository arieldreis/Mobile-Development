import { Text, View, Image } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
        source={require('./assets/myimg.jpeg')} 
        alt={`Minha imagem de perfil para testes.`} 
        style={styles.img}
        />
        <View style={styles.info}>
          <Text style={styles.text}>Nome: Ariel Dos Reis Marinho</Text>
          <Text style={styles.text}>Profissão: Engenheiro de Software Júnior</Text>
          <Text style={styles.text}>Bio: Student of Systems Development, experience in back-end development, passionate in programming and languages.</Text>
        </View>
      </View>
    </View>
  );
}
