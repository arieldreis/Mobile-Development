import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals((currentCourseGolas) => [
      ...currentCourseGolas, 
      enteredGoalText
    ]);
  }


  return (
    <View style={ styles.AppContainer }>
      <View style={ styles.inputContainer }>
        <TextInput 
        placeholder='Type your goal here...' 
        style={ styles.textInput }
        onChangeText={ goalInputHandler }
        />
        <Button 
        title="Tap Me!"
        onPress={ addGoalHandler }
        />
      </View>
      <View style={ styles.goalsContainer }>
        { courseGoals.map((goal) => <Text key={ goal } style={ styles.goalItem }>{ goal }</Text>) }
      </View>
    </View> 
  );
}

export default App
