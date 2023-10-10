import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchTwentyPokemons,
  fetchPokemon,
  selectAllPokemons,
  selectPokemon,
  selectPokemonStatus,
} from "./services/PokemonSlice";

export function useGetTwentyPokemon() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => selectAllPokemons(state));
  const status = useSelector((state) => selectPokemonStatus(state));

  useEffect(() => {
    dispatch(fetchTwentyPokemons());
  }, [dispatch]);

  return { pokemons, status };
}

export function useGetPokemon(name) {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => selectPokemon(state));
  const status = useSelector((state) => selectPokemonStatus(state));

  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, [dispatch, name]);

  return { pokemon, status };
}
