import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../Pokemon'
import { PokemonGateway } from '../gateways/PokemonGateway'
import { NetworkPokemonGatewayImpl } from '../gateways/NetworkPokemonGatewayImpl'

export type PokemonState =
  | { type: 'default' }
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'success'; pokemon: Pokemon }

const pokemonGateway: PokemonGateway = new NetworkPokemonGatewayImpl()

const fetchByName = createAsyncThunk(
  'pokemon/fetchByName',
  pokemonGateway.byName,
)

const slice = createSlice({
  name: 'pokemon',
  initialState: { type: 'default' } as PokemonState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchByName.pending, () => ({ type: 'loading' }))
      .addCase(fetchByName.rejected, () => ({ type: 'error' }))
      .addCase(fetchByName.fulfilled, (_, action) => ({
        type: 'success',
        pokemon: action.payload,
      }))
  },
})

export const { reducer: pokemonReducer } = slice
export const pokemonActions = { fetchByName }
