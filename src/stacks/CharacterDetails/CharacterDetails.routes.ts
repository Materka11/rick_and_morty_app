import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ICharacter} from '../../services/character/character.types';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {character: ICharacter};
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
