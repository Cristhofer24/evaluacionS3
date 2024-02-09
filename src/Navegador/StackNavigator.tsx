import { createStackNavigator } from '@react-navigation/stack';
import { ScreenPrincipal } from '../Screens/ScreenPrincipal';
import { ScreenImg2 } from '../Screens/ScreenImg2';
import { ScreenNumeroMayor } from '../Screens/ScreenNumeroMayor';
import { ScreenNumeroMenor } from '../Screens/ScreenNumeroMenor';
import { ScreenImg } from '../Screens/ScreenImg';

export type RootStackParamList = {
    ScreenPrincipal: undefined,
    ScreenImg: undefined,
    ScreenImg2: undefined,
    ScreenNumeroMayor: undefined,
    ScreenNumeroMenor: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'yellowgreen' } }}>

            <Stack.Screen name="ScreenPrincipal" options={{ headerShown: false }} component={ScreenPrincipal} />
            <Stack.Screen name="ScreenImg" options={{ headerShown: false }} component={ScreenImg} />
            <Stack.Screen name="ScreenImg2" options={{ headerShown: false }} component={ScreenImg2} />
            <Stack.Screen name="ScreenNumeroMayor" options={{ headerShown: false }} component={ScreenNumeroMayor} />
            <Stack.Screen name="ScreenNumeroMenor" options={{ headerShown: false }} component={ScreenNumeroMenor} />

        </Stack.Navigator>
    );
}