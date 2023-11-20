import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native'
import { Provider } from 'react-redux'
import { HeaderView } from '../HeaderView'
import { SearchView } from '../../search/ui/SearchView'
import { PokemonView } from '../../pokemon/ui/PokemonView'
import { AppStore, setupStore } from '../../state'
import { useSearch } from '../../search/state/hooks'
import { usePokemon } from '../../pokemon/state/hooks'

interface Props {
  store?: AppStore
  searchQueryInputTestID?: string
  searchButtonTestID?: string
  searchHistoryButtonTestID?: string
}

export const App: React.FC<Props> = ({
  store = setupStore(),
  searchQueryInputTestID,
  searchButtonTestID,
  searchHistoryButtonTestID,
}) => (
  <Provider store={store}>
    <AppView
      searchQueryInputTestID={searchQueryInputTestID}
      searchButtonTestID={searchButtonTestID}
      searchHistoryButtonTestID={searchHistoryButtonTestID}
    />
  </Provider>
)

export const AppView: React.FC<Omit<Props, 'store'>> = ({
  searchQueryInputTestID,
  searchButtonTestID,
  searchHistoryButtonTestID,
}) => {
  const search = useSearch()
  const pokemon = usePokemon()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <HeaderView />
        <PokemonView state={pokemon.state} />
        <SearchView
          query={search.query}
          onQueryChange={search.updateQuery}
          onSubmit={() => {
            Keyboard.dismiss()
            pokemon.fetchByName(search.query)
          }}
          isHistoryEnabled={false}
          onHistoryToggle={() => {}}
          queryInputTestID={searchQueryInputTestID}
          buttonTestID={searchButtonTestID}
          historyButtonTestID={searchHistoryButtonTestID}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
