import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { HeaderView } from '../HeaderView'

export const App: React.FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
    <HeaderView />
    <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.25 }} />
  </SafeAreaView>
)
