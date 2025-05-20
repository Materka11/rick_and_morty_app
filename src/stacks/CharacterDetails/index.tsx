import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import HeaderDetailsComponent from '../../components/HeaderDetails/HeaderDetails.component';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        header: () => (
          <HeaderDetailsComponent onBack={() => navigation.goBack()} />
        ),
      })}>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
