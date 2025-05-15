import {View, Button} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useQuery} from '@tanstack/react-query';
import {getAllCharacters} from '../../../../services/character/character';
import InterTextComponent from '../../../../components/InterText/InterText.component';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {status, data, error} = useQuery({
    queryKey: ['characters'],
    queryFn: getAllCharacters,
  });

  console.log(data);

  return (
    <View style={styles.container}>
      <InterTextComponent style={styles.title}>Characters</InterTextComponent>
      <Button
        title="Navigate to Details screen"
        onPress={(): void => {
          navigate('CharacterDetailsStack', {
            screen: 'CharacterDetailsScreen',
          });
        }}
      />
    </View>
  );
};

export default CharacterListScreen;
