import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  return (
    <View style={styles.contenador}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
