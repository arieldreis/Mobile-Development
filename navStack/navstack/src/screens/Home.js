import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
export default function Home(){
    const nav = useNavigation();
    return(
        <View style={ styles.contenador }>
            <Text style={ styles.txt }>HOME</Text>

            <TouchableOpacity onPress={() => nav.navigate("Sobre")} style={ styles.btn }>
                <Text style={ styles.btnText }>SOBRE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate("Login")} style={ styles.btn }>
                <Text style={ styles.btnText }>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("Flex")} style={ styles.btn }>
                <Text style={ styles.btnText }>Flex</Text>
            </TouchableOpacity>

            {/* SE UMA FUNÇÃO ARROW TIVER SÓ UMA LINHA DE CÓDIGO NÃO PRECISA DE CHAVES*/}
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
        fontFamily: "Arial",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "#ff0000",
        padding: 15,
        borderRadius: 10,
    },
    btnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontStyle: "italic"
    }
}); 