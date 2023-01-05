import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={valorSelecionado => {
          setStatus(valorSelecionado);
        }}
        trackColor={{ false: '#121212', true: '#00ff00' }}
        thumbColor={status ? '#121212' : '#f4f4f4'}
      />
      <Text style={{ textAlign: 'center', fontSize: 25 }}>
        Status: {status ? 'ATIVO' : 'Inativo'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center'
  }
});
