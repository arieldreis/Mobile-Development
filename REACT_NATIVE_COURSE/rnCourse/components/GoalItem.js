import { View, Text } from 'react-native';
import { styles }  from '../style.js';

const GoalItem = ({ text }) => {
  return (
    <View style={ styles.goalItem }>
        <Text style={ styles.goalText }>{ text }</Text>
    </View>
  )
}

export default GoalItem

