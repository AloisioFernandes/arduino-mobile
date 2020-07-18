import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const [ip, setIp] = useState('')

    const navigation = useNavigation()

    function handleNavigateToDados() {
        navigation.navigate('Dados', {
            ip,
        })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.main}>
                <Text style={styles.title}>Verificar Dados do LDR</Text>
            </View>

            <View>
                <RectButton style={styles.button} onPress={handleNavigateToDados}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </RectButton>
            </View>
        </KeyboardAvoidingView>
    )
}

/*
                <TextInput
                  style={styles.input}
                  placeholder='IP'
                  value={ip}
                  autoCorrect={false}
                  onChangeText={setIp}
                />
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },  

    title: {
        color: '#322153',
        marginLeft: 15,
        fontSize: 32,
        marginTop: 190,
    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 164,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        width: 160,
        marginLeft: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 180,
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26,
        marginTop: 10,
    }
  })

export default Home