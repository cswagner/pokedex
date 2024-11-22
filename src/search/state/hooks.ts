import { useCallback, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { searchActions } from '.'

export const useSearch: () => {
  query: string
  updateQuery: (text: string) => void
  history: string[]
  isHistoryEnabled: boolean
  addQueryToHistory: (text: string) => void
  toggleHistory: () => void
  clearHistory: () => void
} = () => {
  const dispatch = useAppDispatch()
  const query = useAppSelector(state => state.search.query)
  const localHistory = useAppSelector(state => state.search.history)
  const persistedHistory = useAppSelector(
    state => state.search.persistedHistory,
  )
  const isHistoryEnabled = useAppSelector(
    state => state.search.isHistoryEnabled,
  )

  const updateQuery = useCallback(
    (text: string) => {
      dispatch(searchActions.updateQuery(text))
    },
    [dispatch],
  )

  const addQueryToHistory = useCallback(
    (text: string) => {
      dispatch(searchActions.addQueryToHistory(text))
    },
    [dispatch],
  )

  const toggleHistory = useCallback(() => {
    dispatch(searchActions.toggleHistory())
  }, [dispatch])

  const clearHistory = useCallback(() => {
    dispatch(searchActions.clearHistory())
  }, [dispatch])

  const history = useMemo(
    () => [...(persistedHistory ?? []), ...localHistory].reverse(),
    [persistedHistory, localHistory],
  )

  useEffect(() => {
    if (!persistedHistory) {
      dispatch(searchActions.fetchHistory())
    }
  }, [dispatch, persistedHistory])

  return {
    query,
    updateQuery,
    history,
    isHistoryEnabled,
    addQueryToHistory,
    toggleHistory,
    clearHistory,
  }
}
