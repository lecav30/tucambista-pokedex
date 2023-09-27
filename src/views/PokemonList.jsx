import { PokemonCard } from "../components/PokemonCard.jsx";
import { Loading } from "../components/Loading.jsx";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import "./PokemonList.css";

import { useEffect, useState } from "react";

import axios from "axios";

export function PokemonList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fail to obtain the data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="m-4 p-4 bg-white flex justify-center rounded-full">
        <h1 className="title text-5xl">
          React Pokedex <CatchingPokemonIcon fontSize="large" />
        </h1>
      </div>
      <section className="flex flex-wrap gap-8 justify-center items-center p-4 w-full">
        {data.map(({ name }) => (
          <PokemonCard key={name} name={name}>
            {name.toUpperCase()}
          </PokemonCard>
        ))}
      </section>
    </>
  );
}
