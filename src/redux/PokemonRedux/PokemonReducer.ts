import {
  FETCH_TWENTY_POKEMONS_SUCCESS,
  FETCH_TWENTY_POKEMONS_ERROR,
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_SUCCESS,
} from "../types";
import { Action } from "redux-actions";

export interface PokemonState {
  pokemons: any;
  pokemon: any;
  status: null;
}

const initialState: PokemonState = {
  pokemons: [],
  pokemon: {},
  status: null,
};

export const PokemonReducer = (state = initialState, action: Action<any>) => {
  switch (action.type) {
    case FETCH_TWENTY_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        status: "success",
      };
    case FETCH_TWENTY_POKEMONS_ERROR:
      return {
        ...state,
        status: "error",
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        status: "success",
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
};
