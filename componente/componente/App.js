import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { styles } from './styles.js';

export default function App() {
  const [nome, setNome] = useState("");
  const [not, setNot] = useState(true);
  const [dif, setDif] = useState(5);
  return (
    <View style={styles.contenador}>
      <StatusBar backgroundColor='#ffffff'/>
      <ScrollView>
        <Text style={styles.titulo}>Configurações de perfil:</Text>
        <View>
          <Text>Nome:</Text>
          <TextInput 
            placeholder='João da Silva...'
            onChangeText={(v) => setNome(v)}
          />
        </View>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>Receber notificações</Text>
          <Switch 
            trackColor={{ false: "#cc9999", true: "#81ffb0"}} 
            thumbColor={ not ? "#2196f3" : "#f4f3f4"} 
            onValueChange={(v) => setNot(v)} 
            value={not}
          />
        </View>
        <View>
          <Text>Nível de Dificuldade</Text>
          <Slider 
            minimumValue={1} 
            maximumValue={10} 
            step={1} 
            minimumTrackTintColor='#cc0000'
            maximumTrackTintColor='#000000'
            onValueChange={(v) => setDif(v)}
            value={dif}
          />
        </View>
        <View style={styles.qdResultado}>
          <Text style={styles.rotulo}>Resultados</Text>
          <Text style={styles.rotulo}>Input: {nome}</Text>
          <Text style={styles.rotulo}>Switch: { not ? "True" : "False"}</Text>
          <Text>Slider: {dif}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
