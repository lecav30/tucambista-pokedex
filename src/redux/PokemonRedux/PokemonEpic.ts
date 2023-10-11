import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { map, from, Observable, of } from "rxjs";
import axios from "axios";

import {
  FETCH_TWENTY_POKEMONS,
  FETCH_TWENTY_POKEMONS_SUCCESS,
  FETCH_TWENTY_POKEMONS_ERROR,
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
} from "../types";

interface Action {
  type: string;
  payload?: any;
}

export const fetchTwentyPokemonsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(FETCH_TWENTY_POKEMONS),
    mergeMap(() =>
      from(
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      ).pipe(
        map((response: any) => {
          console.log("response pokemons", response.data.results);
          return of({
            type: FETCH_TWENTY_POKEMONS_SUCCESS,
            payload: response.data.results,
          });
        })
      )
    ),
    catchError((error: any) => {
      return of({
        type: FETCH_TWENTY_POKEMONS_ERROR,
        payload: error,
      });
    })
  );

export const fetchPokemonEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(FETCH_POKEMON),
    mergeMap((action: any) =>
      from(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${action.payload.name}`)
      ).pipe(
        map((response: any) => {
          console.log(response.data);
          return of({
            type: FETCH_POKEMON_SUCCESS,
            payload: response.data,
          });
        })
      )
    ),
    catchError((error: any) => {
      return of({
        type: FETCH_POKEMON_ERROR,
        payload: error,
      });
    })
  );
