import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native/types_generated/src/private/webapis/dom/nodes/ReactNativeDocument";

import Home from "./src/screens/Home.js"
import Login from "./src/screens/Login.js"
import Sobre from "./src/screens/Sobre.js"
import Flex from "./src/screens/Flex.js"

const stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ Home } />
        <stack.Screen name="Flex" component={ Flex } />
        <stack.Screen name="Login" component={ Login } />
        <stack.Screen name="Sobre" component={ Sobre } />
      </stack.Navigator>
    </NavigationContainer>
  )
}
