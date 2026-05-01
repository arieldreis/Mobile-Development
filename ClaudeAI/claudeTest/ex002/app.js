import { View, Text, Button, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  function plusNumber(){
    setCount(() => count + 1);
  }
  function minusNumber(){
    setCount(() => count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aperte nos botões abaixo.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.plusButton} onPress={plusNumber}>
          <Text style={styles.text}>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusButton} onPress={minusNumber}>
          <Text style={styles.text}>Minus</Text>
        </TouchableOpacity>
      </View>

      <Text style={{color: count < 0 ? '#ff0404' : '#05d91a', 
        fontFamily: 'Arial', marginTop: 20}}>Resultado: {count}</Text>
    </View>
  )
}

export default App
