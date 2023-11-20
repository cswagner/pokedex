import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../search/state'
import { pokemonReducer } from '../pokemon/state'

const reducer = combineReducers({
  search: searchReducer,
  pokemon: pokemonReducer,
})

export const setupStore = (preloadedState?: AppState) =>
  configureStore({ reducer, preloadedState })

export type AppState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
