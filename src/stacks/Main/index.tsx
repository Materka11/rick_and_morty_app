import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterDetailsStack} from '../CharacterDetails';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackRoutes} from './Main.routes';
import NavComponent from '../../components/Nav/Nav.component';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <NavComponent />,
      }}>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
};
