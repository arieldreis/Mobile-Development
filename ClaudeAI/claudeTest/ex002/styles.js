import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2929',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    plusButton: {
        backgroundColor: '#05d91a',
        padding: 10,
        borderRadius: 10,
        width: 50
    },
    minusButton: {
        backgroundColor: '#ff0404',
        padding: 10,
        borderRadius: 10,
        width: 60
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Arial',
        marginTop: 20,
        marginBottom: 20
    } 
});