import { createAction } from "redux-actions";

import { FETCH_POKEMON, FETCH_TWENTY_POKEMONS } from "../types";

export const fetchTwentyPokemonsAction = createAction(FETCH_TWENTY_POKEMONS);

export const fetchPokemonAction = createAction(FETCH_POKEMON);
