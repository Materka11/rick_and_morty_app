import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useAtom} from 'jotai';
import {favoriteCharactersAtom} from '../../../../lib/atoms/atoms';
import CharacterCardComponent from '../../../../components/CharacterCard/CharacterCard.component';
import InterTextComponent from '../../../../components/InterText/InterText.component';
import {ICharacter} from '../../../../services/character/character.types';
import {styles} from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const [favorites, setFavorites] = useAtom(favoriteCharactersAtom);

  const toggleFavorite = (character: ICharacter) => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(fav => fav.id !== character.id),
    );
  };

  return (
    <View style={{flex: 1}}>
      <InterTextComponent style={styles.title}>Characters</InterTextComponent>
      {favorites.length === 0 ? (
        <InterTextComponent style={styles.subtitle}>
          Empty list
        </InterTextComponent>
      ) : (
        <FlatList
          contentContainerStyle={styles.container}
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CharacterCardComponent
              character={item}
              onPressCard={() =>
                navigation.navigate('CharacterDetailsStack', {
                  screen: 'CharacterDetailsScreen',
                  params: {character: item},
                })
              }
              isFavorite={true}
              onLike={() => toggleFavorite(item)}
            />
          )}
        />
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
