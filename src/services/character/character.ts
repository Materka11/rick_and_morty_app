import {IAllCharactersResponse} from './character.types';
import {ENDPOINTS} from '../endpoints';

interface IGetAllCharactersParams {
  page?: string;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
}

export const getAllCharacters = async ({
  page,
  name,
  status,
  species,
  type,
  gender,
}: IGetAllCharactersParams): Promise<IAllCharactersResponse> => {
  const baseUrl = ENDPOINTS.characters;

  const url = new URL(baseUrl);
  if (page) url.searchParams.append('page', page);
  if (name) url.searchParams.append('name', name);
  if (status) url.searchParams.append('status', status);
  if (species) url.searchParams.append('species', species);
  if (type) url.searchParams.append('type', type);
  if (gender) url.searchParams.append('gender', gender);

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
