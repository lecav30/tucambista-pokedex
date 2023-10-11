import { combineEpics } from "redux-observable";
import {
  fetchPokemonEpic,
  fetchTwentyPokemonsEpic,
} from "./PokemonRedux/PokemonEpic";

const rootEpic = combineEpics(fetchPokemonEpic, fetchTwentyPokemonsEpic);

export default rootEpic;
