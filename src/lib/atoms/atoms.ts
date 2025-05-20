import {atom} from 'jotai';
import {ICharacter} from '../../services/character/character.types';

export const favoriteCharactersAtom = atom<ICharacter[]>([]);
