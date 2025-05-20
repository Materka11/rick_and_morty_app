import React from 'react';
import {Image} from 'expo-image';
import {styles} from './Nav.styled';
import {View} from 'react-native';

const imagePath = require('../../../assets/Rick_and_Morty 1.png');

const NavComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} />
    </View>
  );
};

export default NavComponent;
