import { ApiResponse } from "../../types/ApiTypes";

const API_RESPONSE = 'API_RESPONSE';

const INITIAL_STATE = {
  personagem: [],
}
type Action = {
  type: string;
  payload: ApiResponse;
}


const personagem = (state = INITIAL_STATE, action: Action ) => {
  switch (action.type) {
    case API_RESPONSE:
      return{
        ...state,
        personagem: action,
      };
    default:
      return state;
  }
};

export default personagem;