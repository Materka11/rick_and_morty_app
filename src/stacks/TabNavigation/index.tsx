import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {Pressable, StyleSheet} from 'react-native';
import DmmonoTextComponent from '../../components/DmmonoText/DmmonoText.component';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#162C1B',
          height: 70,
        },
        tabBarIcon: () => {
          let iconName: keyof typeof Ionicons.glyphMap =
            route.name === 'Characters' ? 'person' : 'star';

          return <Ionicons name={iconName} size={16} color={'white'} />;
        },
        tabBarLabel: () => {
          let text =
            route.name === 'Characters' ? 'ALL CHARACTERS' : 'LIKED CHARACTERS';
          return (
            <DmmonoTextComponent style={{color: '#fff'}}>
              {text}
            </DmmonoTextComponent>
          );
        },
        tabBarButton: props => {
          const {onPress, accessibilityState, children} = props;
          const isFocused = accessibilityState?.selected;

          return (
            <Pressable
              onPress={onPress}
              style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
              {children}
            </Pressable>
          );
        },
      })}>
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonFocused: {
    backgroundColor: '#224229',
  },
});
