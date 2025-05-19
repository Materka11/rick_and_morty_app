import {IAllCharactersResponse} from './character.types';
import {ENDPOINTS} from '../endpoints';

interface IGetAllCharactersParams {
  page?: string;
}

export const getAllCharacters = async ({
  page,
}: IGetAllCharactersParams): Promise<IAllCharactersResponse> => {
  const baseUrl = ENDPOINTS.characters;
  const url = new URL(baseUrl);

  if (page) {
    url.searchParams.append('page', page);
  }

  try {
    const response = await fetch(url.toString(), {
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
