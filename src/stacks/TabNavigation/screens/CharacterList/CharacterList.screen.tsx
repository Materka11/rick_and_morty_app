import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getAllCharacters} from '../../../../services/character/character';
import InterTextComponent from '../../../../components/InterText/InterText.component';
import CharacterCardComponent from '../../../../components/CharacterCard/CharacterCard.component';
import {IAllCharactersResponse} from '../../../../services/character/character.types';

interface IQueryData {
  pageParams?: number[];
  pages?: IAllCharactersResponse[];
}

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery<IAllCharactersResponse, Error, IQueryData>({
    queryKey: ['characters'],
    queryFn: ({pageParam = 1}: {pageParam?: unknown}) =>
      getAllCharacters({page: String(pageParam ?? 1)}),
    getNextPageParam: lastPage => {
      if (!lastPage.info.next) return undefined;
      const url = new URL(lastPage.info.next);
      return Number(url.searchParams.get('page'));
    },
    initialPageParam: 1,
  });

  const allCharacters = data?.pages?.flatMap(p => p.results) || [];

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage]);

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

  if (allCharacters.length === 0) {
    return (
      <View style={styles.center}>
        <InterTextComponent>No characters found.</InterTextComponent>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={allCharacters}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={
        <InterTextComponent style={styles.title}>Characters</InterTextComponent>
      }
      renderItem={({item}) => (
        <CharacterCardComponent
          character={item}
          onPressCard={() =>
            navigate('CharacterDetailsStack', {
              screen: 'CharacterDetailsScreen',
              params: {character: item},
            })
          }
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
  );
};

export default CharacterListScreen;
