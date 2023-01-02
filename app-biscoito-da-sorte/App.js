import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');
  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz',
    'Acredite em milagres, mas não dependa deles'
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[numeroAleatorio] + '"');

    setImg(require('./assets/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./assets/biscoito.png'));
    setTextoFrase('');
  }
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={reiniciar}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: { width: 230, height: 230 },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
