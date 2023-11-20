import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchMiddleware, searchReducer } from '../search/state'
import { pokemonReducer } from '../pokemon/state'

const reducer = combineReducers({
  search: searchReducer,
  pokemon: pokemonReducer,
})

export const setupStore = (preloadedState?: AppState) =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(searchMiddleware),
    preloadedState,
  })

export type AppState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
