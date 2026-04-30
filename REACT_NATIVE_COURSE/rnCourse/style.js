import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    AppContainer: {
      padding: 50,
      backgroundColor: '#ffffff',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginBottom: 24,
      paddingBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '80%',
      marginRight: 10,
      padding: 10,
      borderRadius: 5
    },
    goalsContainer: {
      flex: 5
    },
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      color: 'white'
    }
});