import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pessoa(props){
  return(
    <View style={styles.area}>
      <Text style={styles.texto}>Nome: {props.nome}</Text>
      <Text style={styles.texto}>Cargo: {props.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area:{
    backgroundColor:'#121343',
    height: 200,
    justifyContent: 'center',
    marginTop: 10,
    padding: 15,
   },
   texto:{
     color: '#FFF',
     fontSize: 25
   }
})

export default Pessoa;