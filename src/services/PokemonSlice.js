// import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTwentyPokemons = createAsyncThunk(
  "pokemon/fetchTwentyPokemons",
  async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (pokemon) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const pokemonReducer = createReducer(
  { pokemons: [], pokemon: {}, status: null },
  (builder) => {
    builder.addCase(
      fetchTwentyPokemons.pending,
      (state) => {
        state.status = "loading";
      },
      builder.addCase(fetchTwentyPokemons.fulfilled, (state, action) => {
        state.status = "succeded";
        state.pokemons = action.payload;
      }),
      builder.addCase(fetchTwentyPokemons.rejected, (state) => {
        state.status = "failed";
      }),
      builder.addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "succeded";
        state.pokemon = action.payload;
      }),
      builder.addCase(fetchPokemon.rejected, (state) => {
        state.status = "failed";
      })
    );
  }
);

// export const pokemonsSlice = createSlice({
//   name: "pokemon",
//   initialState: {
//     pokemons: [],
//     pokemon: {}, // usar como undefined
//     status: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTwentyPokemons.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchTwentyPokemons.fulfilled, (state, action) => {
//         state.status = "succeded";
//         state.pokemons = action.payload;
//       })
//       .addCase(fetchTwentyPokemons.rejected, (state) => {
//         state.status = "failed";
//       })
//       .addCase(fetchPokemon.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPokemon.fulfilled, (state, action) => {
//         state.status = "succeded";
//         state.pokemon = action.payload;
//       })
//       .addCase(fetchPokemon.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

export const selectAllPokemons = (state) => state.pokemon.pokemons;
export const selectPokemon = (state) => state.pokemon.pokemon;
export const selectPokemonStatus = (state) => state.pokemon.status;

// export default pokemonsSlice.reducer;
