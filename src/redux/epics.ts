import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import {
  fetchPokemonEpic,
  fetchTwentyPokemonsEpic,
} from "./PokemonRedux/PokemonEpic";

const epics = [fetchPokemonEpic, fetchTwentyPokemonsEpic];

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );
// const rootEpic = combineEpics(fetchPokemonEpic, fetchTwentyPokemonsEpic);

export default rootEpic;
