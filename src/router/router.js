import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Forget from '../screens/auth/Forget';
import Splash from '../screens/splash/splash';
import Eve from '../screens/eve';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

function AppRouter() {

  const mytheme={
    DefaultTheme,
    colors:{
      primary:'rgb(255,45,58)'
    }
  }

  return (
    <NavigationContainer theme={mytheme}>
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="Eve" component={Eve} />
        <Stack.Screen options={{headerShown:false}} name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
