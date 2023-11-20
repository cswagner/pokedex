import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { searchActions } from '.'

export const useSearch: () => {
  query: string
  updateQuery: (text: string) => void
} = () => {
  const dispatch = useAppDispatch()
  const query = useAppSelector(state => state.search.query)

  const updateQuery = useCallback(
    (text: string) => {
      dispatch(searchActions.updateQuery(text))
    },
    [dispatch],
  )

  return { query, updateQuery }
}
