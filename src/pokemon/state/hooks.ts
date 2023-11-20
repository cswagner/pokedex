import { useCallback } from 'react'
import { PokemonState } from '.'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { pokemonActions } from '.'

export const usePokemon: () => {
  state: PokemonState
  fetchByName: (name: string) => void
} = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(({ pokemon }) => pokemon)

  const fetchByName = useCallback(
    (name: string) => {
      dispatch(pokemonActions.fetchByName(name))
    },
    [dispatch],
  )

  return { state, fetchByName }
}
