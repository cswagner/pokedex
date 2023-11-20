import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { searchActions } from '.'

export const useSearch: () => {
  query: string
  updateQuery: (text: string) => void
  history: string[]
  isHistoryEnabled: boolean
  addQueryToHistory: (text: string) => void
  toggleHistory: () => void
} = () => {
  const dispatch = useAppDispatch()
  const query = useAppSelector(state => state.search.query)
  const history = useAppSelector(state => state.search.history)
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

  return {
    query,
    updateQuery,
    history,
    isHistoryEnabled,
    addQueryToHistory,
    toggleHistory,
  }
}
