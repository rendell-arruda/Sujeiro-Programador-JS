import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Button from './src/Button';
import Cliente from './src/Cliente';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const [sexoSelecionado, setSexoSelecionado] = useState(0);

  const [sexo, setSexo] = useState([
    { key: 1, nome: 'Masculino' },
    { key: 2, nome: 'Feminino' },
    { key: 3, nome: 'Outro' }
  ]);

  let sexoItem = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />;
  });

  const [status, setStatus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* TITULO */}
      <View style={styles.tituloArea}>
        <Text style={styles.titulo}>Banco Sujeito</Text>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://w7.pngwing.com/pngs/859/407/png-transparent-bankgarantie-computer-icons-finance-bank-trademark-logo-bank.png'
          }}
        />
      </View>

      {/* IMPUT */}
      <View style={styles.inputArea}>
        <TextInput
          placeholder={'Digite seu nome'}
          style={styles.input}
          onChangeText={text => {
            setNome(text);
          }}
        />

        <TextInput
          placeholder={'Digite sua idade'}
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={text => {
            setIdade(text);
          }}
        />
      </View>
      {/*  */}

      {/* PICKER */}
      <Picker
        selectedValue={sexoSelecionado}
        onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue)}
      >
        {sexoItem}
      </Picker>
      {/*  */}
      {/* SLIDER */}
      {/*  */}

      {/* SWITCH */}
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
      {/*  */}

      {/* BOTAO */}
      <Button />

      {/* CLIENTE */}
      <Cliente nome={nome} idade={idade} />
      <Text>{sexo[sexoSelecionado].nome}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  tituloArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  titulo: {
    fontSize: 20
  },
  logo: {
    marginLeft: 10,
    width: 30,
    height: 30
  },
  inputArea: {},
  input: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20
  }
});
