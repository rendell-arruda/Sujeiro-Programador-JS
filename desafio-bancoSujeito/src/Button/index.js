import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastra-se </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#570AB3',
    margin: 20,
    borderRadius: 10
  },
  buttonText: {
    color: '#FAF8FE',
    fontSize: 16,
    textAlign: 'center'
  }
});
