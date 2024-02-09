import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import { TitleComponets } from '../components/Title';
import { BodyComponents } from '../components/Body';
import { ButtonComponent } from '../components/Buton';
import { RootStackParamList } from '../Navegador/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreenImg } from './ScreenImg';
interface Props extends StackScreenProps<RootStackParamList,'ScreenPrincipal'>{};

export const ScreenPrincipal = ({navigation}:Props) => {

  return (
    <View>
        <StatusBar backgroundColor='yellowgreen'/>
        <TitleComponets title='Bienvenido'/>
        <BodyComponents>
             <ButtonComponent title={'Imagen 1'} onPress={()=>navigation.navigate('ScreenImg')}/>
             <ButtonComponent title={'Imagen 2'} onPress={()=>navigation.navigate('ScreenImg2')}/>
             <ButtonComponent title={'Numero Mayor'} onPress={()=>navigation.navigate('ScreenNumeroMayor')}/>
             <ButtonComponent title={'Numero Menor'} onPress={()=>navigation.navigate('ScreenNumeroMenor')}/>
        </BodyComponents>
    </View>
  );
};
