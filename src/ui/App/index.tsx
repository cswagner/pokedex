import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native'
import { HeaderView } from '../HeaderView'
import { SearchView } from '../../search/ui/SearchView'

export const App: React.FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <HeaderView />
      <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.25 }} />
      <SearchView
        query=""
        onQueryChange={() => {}}
        onSubmit={() => {
          Keyboard.dismiss()
        }}
      />
    </KeyboardAvoidingView>
  </SafeAreaView>
)
