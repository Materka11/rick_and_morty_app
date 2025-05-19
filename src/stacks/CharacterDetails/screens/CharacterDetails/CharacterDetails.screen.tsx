import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import CharacterDetailsCardComponent from '../../../../components/CharacterDetailsCard/CharacterDetailsCard.component';
import {useRoute, RouteProp} from '@react-navigation/native';
import {ICharacter} from '../../../../services/character/character.types';

const CharacterDetailsScreen = () => {
  const route =
    useRoute<RouteProp<{params: {character: ICharacter}}, 'params'>>();
  const character = route.params?.character;

  return (
    <View style={styles.container}>
      <CharacterDetailsCardComponent character={character} />
    </View>
  );
};

export default CharacterDetailsScreen;
