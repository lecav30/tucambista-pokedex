import { combineReducers } from "redux";
import { PokemonReducer, PokemonState } from "./PokemonRedux/PokemonReducer";

export type InitialRootState = {
  PokemonState: PokemonState;
};

const reducers = combineReducers({
  PokemonState: PokemonReducer,
});

export default reducers;
