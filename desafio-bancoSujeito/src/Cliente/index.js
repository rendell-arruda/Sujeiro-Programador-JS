import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import React, { useState } from 'react';

export default function Cliente(props) {
  return (
    <View>
      <Text> Seja bem Vindo</Text>
      <Text> {props.nome}</Text>
      <Text> {props.idade} Anos</Text>
      <Text> {props.sexoSelecionado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
