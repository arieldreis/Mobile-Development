import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./style.js";
import GoalItem from "./components/GoalItem.js";
import GoalInput from "./components/GoalInput.js";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [modalsVisable, setModalsVisable] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalsVisable(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGolas) => [
      ...currentCourseGolas,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGolas) => {
      return currentCourseGolas.filter((goal) => goal.id !== id);
    });
  }

  function endAddGoalHandler() {
    setModalsVisable(false);
  }
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.AppContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalsVisable}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

export default App;