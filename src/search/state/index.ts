import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  query: string
}

const slice = createSlice({
  name: 'search',
  initialState: { query: '' } as SearchState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
})

export const { reducer: searchReducer, actions: searchActions } = slice
