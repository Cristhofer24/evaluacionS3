import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
interface InputProps {
  placeholder: string;
  name: string;
  //metodo que capture el valor de un imput
  onChangeText: (name: string, value: string) => void;
  actionIcon?: () => void;

}
export const InputComponent = ({
  placeholder,
  name,
 
}: InputProps) => {
  
  return (
    <View>
         <TextInput
        placeholder={placeholder}
        keyboardType={'default'}
        style={estilo.inputText}
      />
    </View>
  );
};

const estilo = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    marginTop: 22,
  },
  inputText: {
    backgroundColor:'skyblue',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  
  errortyxt:{
   color:'red',
   fontSize:12,
   fontWeight:'bold'
  },
  error:{
    borderColor:'red',
    borderStyle:'solid',
    borderWidth:1

  }
});
