import { ApiResponse } from "../../types/ApiTypes";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const API_RESPONSE = 'API_RESPONSE';

type Personagem = {
  personagem: ApiResponse;
}
type Dispatch = ThunkDispatch<Personagem, unknown, AnyAction>;

export const apiResponse = (payload: ApiResponse) => ({
  type: API_RESPONSE,
  payload: payload.results,
})

export const fetchCharacters = async (dispatch: Dispatch) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: ApiResponse = await response.json();
  data.results.map((personagem) => delete personagem.episode && personagem);

  dispatch(apiResponse(data));
  // return data;
}
