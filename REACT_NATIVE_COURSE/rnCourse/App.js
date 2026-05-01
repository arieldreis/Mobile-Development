import { Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { styles } from './style.js';
import GoalItem from './components/GoalItem.js'
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
      { text: enteredGoalText, id: Math.random().toString() },
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
        <FlatList data={ courseGoals } renderItem={ itemData => {
          return <GoalItem text={ itemData.item.text }/>;
        }} 
        keyExtractor={ (item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} 
        />
      </View>
    </View> 
  );
}

export default App
