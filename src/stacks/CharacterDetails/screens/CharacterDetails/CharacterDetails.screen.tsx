import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import CharacterDetailsCardComponent from '../../../../components/CharacterDetailsCard/CharacterDetailsCard.component';
import {useRoute, RouteProp} from '@react-navigation/native';
import {ICharacter} from '../../../../services/character/character.types';
import {useAtom} from 'jotai';
import {favoriteCharactersAtom} from '../../../../lib/atoms/atoms';
import InterTextComponent from '../../../../components/InterText/InterText.component';

const CharacterDetailsScreen = () => {
  const route =
    useRoute<RouteProp<{params: {character: ICharacter}}, 'params'>>();
  const character = route.params?.character;
  const [favorites, setFavorites] = useAtom(favoriteCharactersAtom);

  const toggleFavorite = (character: ICharacter) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(
        fav => fav.id === character.id,
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter(fav => fav.id !== character.id);
      } else {
        return [...prevFavorites, character];
      }
    });
  };

  if (!character) {
    return (
      <View style={styles.container}>
        <InterTextComponent>No data provided</InterTextComponent>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <CharacterDetailsCardComponent
        character={character}
        isFavorite={favorites.some(fav => fav.id === character.id)}
        onLike={() => toggleFavorite(character)}
      />
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
