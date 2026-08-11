import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"
export default function Home(){
    const nav = useNavigation();
    return(
        <View>
            <Text>Home</Text>
            <Button 
            title="About Us" 
            color="#ff0000" 
            onPress={() => nav.navigate("Sobre")}
            />

            <Button 
            title="Entrar" 
            onPress={() => nav.navigate('Login')}
            />
            <Button 
            title="Estudo do Flex" 
            onPress={() => nav.navigate('Flex')} 
            />

            {/* SE UMA FUNÇÃO ARROW TIVER SÓ UMA LINHA DE CÓDIGO NÃO PRECISA DE CHAVES*/}
            <Text></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    contenador: {
        flex: 1,
        gap: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 30,
    },
});
