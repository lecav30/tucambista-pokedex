import { combineReducers } from "redux";
// import { PokemonReducer, PokemonState } from "./PokemonRedux/PokemonReducer";
import { PokemonReducer } from "./PokemonRedux/PokemonReducer";

// export type InitialRootState = {
//   PokemonState: PokemonState;
// };

// const reducers = combineReducers({
//   PokemonState: PokemonReducer,
// });

const reducers = combineReducers({
  PokemonReducer,
});

export default reducers;
