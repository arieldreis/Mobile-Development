import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    justifyContent: 'center',
    gap: 15,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#c00',
  },

  rotulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    padding: 5,
  },

  campo: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
  },

  linha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    gap: 15,
  },

  qdResultado: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,

    borderLeftWidth: 5,
    borderLeftColor: '#007aff',

    elevation: 2, // sombra para Android

    shadowColor: '#000', // sombra para iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,
  },
});