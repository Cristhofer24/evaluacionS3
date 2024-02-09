import React from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'
import { BodyComponents } from '../components/Body';
import { TitleComponets } from '../components/Title';
import { ButtonComponent } from '../components/Buton';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const ScreenImg2 = () => {
  const navigation=useNavigation();
  return (
    <View>
    <StatusBar backgroundColor='yellowgreen'/>
    <TitleComponets title='Bienvenido'/>
    <BodyComponents>
        <View>
            <Image style={style.img} source={{uri:'https://c4.wallpaperflare.com/wallpaper/911/492/963/arbol-naturaleza-paisajes-prado-wallpaper-preview.jpg'}}/>       
             </View>
         <ButtonComponent title={'Volver al menu'} onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenPrincipal'}))}/>
    </BodyComponents>
</View>
  )
}

const style= StyleSheet.create({
    img:{
        width:100,
        height:100
    }
})