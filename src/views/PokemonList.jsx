import { PokemonCard } from "../components/PokemonCard.jsx";
import { Loading } from "../components/Loading.jsx";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import "./PokemonList.css";

import { useGetTwentyPokemon } from "../hooks";

export function PokemonList() {
  const { pokemons, status } = useGetTwentyPokemon();

  if (status === "loading") return <Loading />;
  if (status === "error") return <div>Something went wrong!</div>;
  return (
    <>
      <div className="m-4 p-4 bg-white flex justify-center rounded-full">
        <h1 className="title text-5xl">
          React Pokedex <CatchingPokemonIcon fontSize="large" />
        </h1>
      </div>
      <section className="flex flex-wrap gap-8 justify-center items-center p-4 w-full">
        {pokemons.map(({ name }) => (
          <PokemonCard key={name} name={name}>
            {name.toUpperCase()}
          </PokemonCard>
        ))}
      </section>
    </>
  );
}
