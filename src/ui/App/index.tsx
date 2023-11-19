import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native'
import { Provider } from 'react-redux'
import { HeaderView } from '../HeaderView'
import { SearchView } from '../../search/ui/SearchView'
import { AppStore, setupStore } from '../../state'
import { useSearch } from '../../search/state/hooks'
import { usePokemon } from '../../pokemon/state/hooks'

interface Props {
  store?: AppStore
}

export const App: React.FC<Props> = ({ store = setupStore() }) => (
  <Provider store={store}>
    <AppView />
  </Provider>
)

export const AppView: React.FC = () => {
  const search = useSearch()
  const pokemon = usePokemon()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <HeaderView />
        <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.25 }} />
        <SearchView
          query={search.query}
          onQueryChange={search.updateQuery}
          onSubmit={() => {
            Keyboard.dismiss()
            pokemon.fetchByName(search.query)
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
