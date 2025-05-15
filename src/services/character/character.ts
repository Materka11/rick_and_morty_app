import {IAllCharactersResponse} from './character.types';
import {ENDPOINTS} from '../endpoints';

export const getAllCharacters = async (): Promise<IAllCharactersResponse> => {
  const baseUrl = ENDPOINTS.characters;

  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: IAllCharactersResponse = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to fetch characters:', err);
    throw err;
  }
};
