import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponets } from '../components/Title'
import { BodyComponents } from '../components/Body'
import { ButtonComponent } from '../components/Buton'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const ScreenImg = () => {
    const navigation=useNavigation();
  return (
    <View>
    <StatusBar backgroundColor='yellowgreen'/>
    <TitleComponets title='Bienvenido'/>
    <BodyComponents>
        <View>
            <Image style={style.img} source={{uri:'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
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