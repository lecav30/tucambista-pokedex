import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchPokemonAction,
  fetchTwentyPokemonsAction,
} from "./redux/PokemonRedux/PokemonActions";
// import { RootState } from "./models/redux";

export function useGetTwentyPokemon() {
  const dispatch = useDispatch();
  const { pokemons, status } = useSelector(
    (state: any) => state.PokemonReducer
    // (state: RootState) => state.PokemonState
  );

  useEffect(() => {
    dispatch(fetchTwentyPokemonsAction());
  }, [dispatch]);

  console.log("pokemons hook", pokemons);

  return { pokemons, status };
}

export function useGetPokemon(name: string) {
  const dispatch = useDispatch();
  const { pokemon, status } = useSelector(
    (state: any) => state.PokemonReducer
    // (state: RootState) => state.PokemonState
  );

  useEffect(() => {
    dispatch(fetchPokemonAction(name));
  }, [dispatch, name]);

  return { pokemon, status };
}
