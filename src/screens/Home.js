import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"
export default function Home(){
    const nav = useNavigation();
    return(
        <View>
            <Text>Home</Text>
            <Button title="About Us" color="#ff0000" 
            onPress={() => nav.navigate("Sobre")}
            />
            {/* SE UMA FUNÇÃO ARROW TIVER SÓ UMA LINHA DE CÓDIGO NÃO PRECISA DE CHAVES*/}
        </View>
    )
}