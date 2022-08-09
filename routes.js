import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Filme from './src/pages/Filme';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            shifting={false}
            activeColor = {"#fff"}
            barStyle = {{backgroundColor: "#141414"}}
            initialRouteName='Home'>
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: 'Ínicio',
                tabBarIcon: ({color}) => (
                    <Icon name="home" color={color} size={26} />
                )
            }}/>
             <Tab.Screen 
            name="buscar" 
            component={Home}
            options={{
                tabBarLabel: 'Buscar',
                tabBarIcon: ({color}) => (
                    <Icon name="magnify" color={color} size={26} />
                )
            }}/>
            <Tab.Screen 
            name="em-breve" 
            component={Home}
            options={{
                tabBarLabel: 'Em breve',
                tabBarIcon: ({color}) => (
                    <Icon name="play-speed" color={color} size={26} />
                )
            }}/>
                    <Tab.Screen 
            name="download" 
            component={Home}
            options={{
                tabBarLabel: 'Downloads',
                tabBarIcon: ({color}) => (
                    <Icon name="download" color={color} size={26} />
                )
            }}/>
            <Tab.Screen 
            name="mais" 
            component={Home}
            options={{
                tabBarLabel: 'Mais',
                tabBarIcon: ({color}) => (
                    <Icon name="menu" color={color} size={26} />
                )
            }}/>
        </Tab.Navigator>
    )
}

const Routes = () => {
	return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}}  name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeTabs} />
          <Stack.Screen options={{headerShown: false}}  name="Filme" component={Filme} />
        </Stack.Navigator>
      </NavigationContainer>
	);
};

export default Routes;
