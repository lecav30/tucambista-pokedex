import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "../services/PokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
