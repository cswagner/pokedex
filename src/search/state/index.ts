import {
  createAsyncThunk,
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { SearchHistoryGateway } from '../gateways/SearchHistoryGateway'
import { DiskSearchHistoryGatewayImpl } from '../gateways/DiskSearchHistoryGatewayImpl'

interface SearchState {
  query: string
  history: string[]
  persistedHistory?: string[]
  isHistoryEnabled: boolean
}

const historyGateway: SearchHistoryGateway = new DiskSearchHistoryGatewayImpl()
const fetchHistory = createAsyncThunk(
  'search/fetchHistory',
  historyGateway.history,
)

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
  extraReducers: builder => {
    builder
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.persistedHistory = action.payload
      })
      .addCase(fetchHistory.rejected, state => {
        state.persistedHistory = []
      })
  },
})

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  actionCreator: slice.actions.addQueryToHistory,
  effect: action => {
    historyGateway.add(action.payload)
  },
})

export const { reducer: searchReducer } = slice
export const { middleware: searchMiddleware } = listenerMiddleware
export const searchActions = { ...slice.actions, fetchHistory }
