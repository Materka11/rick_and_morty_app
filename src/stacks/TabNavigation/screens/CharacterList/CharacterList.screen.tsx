import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Implement CharactersListScreen</Text>
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
