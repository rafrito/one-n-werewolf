import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import RolesScreen from './RolesScreen';
import RulesScreen from './RulesScreen';
import GameScreen from './GameScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inicial" component={HomeScreen} />
    <Stack.Screen name="Papéis" component={RolesScreen} />
    <Stack.Screen name="Regras" component={RulesScreen} />
    <Stack.Screen name="Jogo" component={GameScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
