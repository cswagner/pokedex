import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  query: string
  history: string[]
  isHistoryEnabled: boolean
}

const slice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    history: [],
    isHistoryEnabled: false,
  } as SearchState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    addQueryToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload)
    },
    toggleHistory: state => {
      state.isHistoryEnabled = !state.isHistoryEnabled
    },
  },
})

export const { reducer: searchReducer, actions: searchActions } = slice
