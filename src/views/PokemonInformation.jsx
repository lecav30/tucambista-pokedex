import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { Loading } from "../components/Loading.jsx";

import { useParams, Link } from "react-router-dom";

import { useGetPokemon } from "../hooks";

export function PokemonInformation() {
  const { name } = useParams();
  const { pokemon, status } = useGetPokemon(name);
  console.log("pokemon", pokemon);

  if (status === "loading") return <Loading />;
  if (status === "error") return <div>Something went wrong!</div>;
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-col items-center w-8/12 md:w-6/12 lg:w-4/12">
          <CardHeader
            className="flex justify-center"
            title={name.toUpperCase()}
          />
          {pokemon.sprites ? (
            <img
              className="w-24 transition hover:scale-125"
              src={pokemon.sprites.front_default}
              alt=""
            />
          ) : null}
          <CardContent className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <strong>Order:</strong>
              <strong>Base Experience: </strong>
              <strong>Height:</strong>
              <strong>Abilities:</strong>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p>{pokemon.order}</p>
              <p>{pokemon.base_experience}</p>
              <p>{pokemon.height}</p>
              <p>
                {pokemon.abilities
                  ? pokemon.abilities
                      .map((item) => item.ability.name)
                      .join(", ")
                  : null}
              </p>
            </div>
          </CardContent>
          <CardActions>
            <Link to="/">
              <Button size="small" variant="outlined" color="error">
                Back
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
