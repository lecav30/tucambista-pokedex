import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { Loading } from "../components/Loading.jsx";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

export function PokemonInformation() {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
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
      <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-col items-center w-4/12">
          <CardHeader
            className="flex justify-center"
            title={name.toUpperCase()}
          />
          <img
            className="w-24 transition hover:scale-125"
            src={data.sprites.front_default}
            alt=""
          />
          <CardContent className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <strong>Order:</strong>
              <strong>Base Experience: </strong>
              <strong>Height:</strong>
              <strong>Abilities:</strong>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p>{data.order}</p>
              <p>{data.base_experience}</p>
              <p>{data.height}</p>
              <p>
                {data.abilities.map((item) => item.ability.name).join(", ")}
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
