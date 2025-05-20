import {
  ActivityIndicator,
  Button,
  FlatList,
  Platform,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getAllCharacters} from '../../../../services/character/character';
import InterTextComponent from '../../../../components/InterText/InterText.component';
import CharacterCardComponent from '../../../../components/CharacterCard/CharacterCard.component';
import {
  IAllCharactersResponse,
  ICharacter,
} from '../../../../services/character/character.types';
import {Ionicons} from '@expo/vector-icons';
import {useAtom} from 'jotai';
import {favoriteCharactersAtom} from '../../../../lib/atoms/atoms';

interface IQueryData {
  pageParams?: number[];
  pages?: IAllCharactersResponse[];
}

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'alive' | 'dead' | 'unknown' | ''
  >('');
  const [speciesFilter, setSpeciesFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<
    'female' | 'male' | 'genderless' | 'unknown' | ''
  >('');
  const [isFocused, setIsFocused] = useState(false);

  const [favorites, setFavorites] = useAtom(favoriteCharactersAtom);

  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery<IAllCharactersResponse, Error, IQueryData>({
    queryKey: [
      'characters',
      {
        name: nameFilter,
        status: statusFilter,
        species: speciesFilter,
        gender: genderFilter,
      },
    ],
    queryFn: ({pageParam = 1}) =>
      getAllCharacters({
        page: String(pageParam),
        name: nameFilter || undefined,
        status: statusFilter || undefined,
        species: speciesFilter || undefined,
        gender: genderFilter || undefined,
      }),
    getNextPageParam: lastPage => {
      if (!lastPage.info.next) return undefined;
      const url = new URL(lastPage.info.next);
      return Number(url.searchParams.get('page'));
    },
    placeholderData: prev => prev,
    initialPageParam: 1,
  });

  const allCharacters = data?.pages?.flatMap(p => p.results) || [];

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    refetch();
  }, [nameFilter, statusFilter, speciesFilter, genderFilter, refetch]);

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

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={styles.center}>
        <InterTextComponent>Oops! {error.message}</InterTextComponent>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  if (!allCharacters.length)
    return (
      <View style={styles.center}>
        <Button
          title="Clear filters"
          onPress={() => {
            setNameFilter('');
            setStatusFilter('');
            setSpeciesFilter('');
            setGenderFilter('');
          }}
        />
      </View>
    );

  return (
    <View style={{flex: 1}}>
      <InterTextComponent style={styles.title}>Characters</InterTextComponent>
      <View style={styles.filtersContainer}>
        <View
          style={[
            styles.searchContainer,
            {borderColor: isFocused ? '#59695C' : '#162C1B'},
          ]}>
          <Ionicons name="search" size={20} color="#162C1B" />
          <TextInput
            style={[
              styles.input,
              Platform.OS === 'web' && ({outlineStyle: 'none'} as any),
            ]}
            placeholder="Search the characters"
            placeholderTextColor="#59695C"
            value={nameFilter}
            onChangeText={setNameFilter}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={allCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CharacterCardComponent
            character={item}
            onPressCard={() =>
              navigate('CharacterDetailsStack', {
                screen: 'CharacterDetailsScreen',
                params: {character: item},
              })
            }
            isFavorite={favorites.some(fav => fav.id === item.id)}
            onLike={() => toggleFavorite(item)}
          />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          if (isFetchingNextPage) {
            return <ActivityIndicator style={{margin: 16}} />;
          }
          if (!hasNextPage) {
            return (
              <InterTextComponent style={{textAlign: 'center', margin: 16}}>
                End of list
              </InterTextComponent>
            );
          }
          return null;
        }}
      />
    </View>
  );
};

export default CharacterListScreen;
