import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SocketIOClient from 'socket.io-client'

interface Value {
  valor: number
}

const socket = SocketIOClient('http://192.168.1.107:3000') //ip e porta do servidor, alterar se necessário

const Dados = () => {
  const navigation = useNavigation()

  const [ valor, setValor ] = useState(0)
  let icon = valor > 350 //modifica os ícones de acordo com o valor recebido
  ? require('../../assets/sun.png')
  : require('../../assets/moon.png')

  socket.on('dadoArduino', (dado: Value) => { //atualiza o valor quando receber um dado do arduino
    let val = dado.valor
    setValor(val)
  })

  function handleNavigateBack() { //voltar para tela anterior
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dados LDR</Text>
      </View>

      <TouchableOpacity onPress={handleNavigateBack}>
         <Icon name="arrow-left" size={28} color="#343434"/>
      </TouchableOpacity>

        <Text>Luminosidade: {valor}</Text>
        <Image source={icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#456789',
    height: 90,
    marginTop: 0,
    position: 'relative',
    width: 360,
    justifyContent: 'center'
  },

  title: {
    color: '#fff',
    marginTop: 35,
    fontSize: 26,
  }
})
 
export default Dados