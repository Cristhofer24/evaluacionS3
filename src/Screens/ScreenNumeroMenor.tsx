import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { TitleComponets } from '../components/Title';
import { BodyComponents } from '../components/Body';
import { InputComponent } from '../components/Input';
import { ButtonComponent } from '../components/Buton';
import { CommonActions, useNavigation } from '@react-navigation/native';



export const ScreenNumeroMenor = () => {
  const navigation=useNavigation();
  const [numero, setNumero] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);
  const [resultado1, setResultado1] = useState<string>('');
  const handlerSendInfo = () => {
  if(numero<numero2){
    console.log('El múnero menor es: ',numero);
    setResultado(numero);

  }else{
    if(numero2<numero){
      console.log('El múnero menor es: ',numero2);
      setResultado(numero2);
    }else{
      if(numero2==numero){
        console.log('los numeros son Iguales');
        setResultado1('si');
      }else{
        setResultado1('No');
      }
      

     
    }
  }

  }

  return (
    <View>
      <StatusBar backgroundColor='green'/>
      <TitleComponets title='Determinar numero Mayor'/>
      <BodyComponents>
        <View style={styles.containerForm}>
           <TextInput
            style={styles.input}
            placeholder='Número1'
            keyboardType='numeric'
            onChangeText={(value: string) => setNumero(parseInt(value))}
          /> 
             <TextInput
            style={styles.input}
            placeholder='Número2'
            keyboardType='numeric'
            onChangeText={(value: string) => setNumero2(parseInt(value))}
          /> 
        </View>
        {resultado !== null && <Text>El múnero menor es: {resultado}</Text>}
         {resultado1 !== null && <Text>Los numeros son iguales: {resultado1}</Text>}
        <ButtonComponent title='Calcular <=' onPress={handlerSendInfo}  />
        <ButtonComponent title={'Volver al menu'} onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenPrincipal'}))}/>
        <Text></Text>
      </BodyComponents>
    </View>
  )
}

const styles = StyleSheet.create({
  textWelcome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  textDescription: {
    fontSize: 15
  },
  containerForm: {
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10
  }
});
