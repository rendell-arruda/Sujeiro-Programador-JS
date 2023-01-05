import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Pessoa from './src/Pessoa';

export default function App() {

  const [feed, setFeed] = useState([
    { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
    { id: '2', nome: 'Lucas', idade: 23, email: 'lucas@lucas.com'},    
    { id: '3', nome: 'Henrique', idade: 40, email: 'henri@henrique.com'},    
    { id: '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},  
    { id: '5', nome: 'José', idade: 29, email: 'jose@jose.com'},
    { id: '6', nome: 'Sujeito Programador', idade: 89, email: 'sujeito@sujeito.com'}  
  ]);

 return (
  <View style={styles.container}>

    <FlatList
    showsVerticalScrollIndicator={false}
    data={feed}
    renderItem={ ({ item }) => <Pessoa data={item}  /> }
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
})

