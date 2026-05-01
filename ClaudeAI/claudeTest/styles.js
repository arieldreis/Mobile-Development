import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#a29e9e',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        boxShadow: '3px 3px 0px 3px #000000ba',
    },
    img: {
        width: 300,
        height: 350,
        borderRadius: 10,
        margin: 'auto',
        boxShadow: '10px 10px 5px #888888'
    },
    info: {
        marginTop: 25,
    },
    text: {
        fontFamily: 'Helvetica',
        fontStyle: 'italic',
        fontWeight: 'medium',
        textAlign: 'center',
        color: '#ffffff',
    }
});