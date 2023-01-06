import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView
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

  const [limite, setLimiteSelecionado] = useState(0);

  return (
    <ScrollView>
      {/* TITULO */}
      <SafeAreaView style={styles.container}>
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
        <View style={styles.area}>
          <Text style={styles.inputText}>Informe os seus dados</Text>
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
        <View style={[styles.pickerArea, styles.area]}>
          <Text style={styles.pickerText}>Selecione o seu Sexo</Text>
          <Picker
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
              setSexoSelecionado(itemValue)
            }
          >
            {sexoItem}
          </Picker>
        </View>
        {/*  */}
        {/* SLIDER */}
        <View style={styles.area}>
          <Text>Escolha o seu Limite</Text>
          <Slider
            minimumValue={200}
            maximumValue={2000}
            onValueChange={valorSelecionado => {
              setLimiteSelecionado(valorSelecionado);
            }}
          />
          <Text style={{ textAlign: 'center' }}>R$ {limite.toFixed(0)},00</Text>
        </View>
        {/*  */}
        {/* SWITCH */}
        <View style={styles.area}>
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
        </View>
        {/* BOTAO */}
        <Button />
        {/* tornar visivel se o nome estiver preenchido
        {nome ? (
          <View style={styles.area}>
            <Cliente
              nome={nome}
              idade={idade}
              sexo={sexo[sexoSelecionado].nome}
              limite={limite.toFixed(0)}
            />
          </View>
        ) : (
          ''
        )} */}
        {/* CLIENTE */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  area: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    padding: 5
  },
  tituloArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  titulo: {
    fontSize: 20
  },

  logo: {
    marginLeft: 10,
    width: 30,
    height: 30
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20
  },
  inputText: { textAlign: 'center', marginBottom: 10 },
  pickerArea: {
    borderColor: '#121212',
    borderWidth: 1
    // marginHorizontal: 10,
    // marginVertical: 10
  },
  pickerText: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#121212',
    color: '#fff',
    padding: 10
  }
});
