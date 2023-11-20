import React from 'react'
import { FlatList } from 'react-native'
import { TextView } from '../../../ui/TextView'

interface Props {
  history: string[]
}

export const SearchHistoryView: React.FC<Props> = ({ history }) => (
  <FlatList
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    contentContainerStyle={{ padding: 16 }}
    keyboardDismissMode="on-drag"
    data={history}
    renderItem={info => (
      <TextView
        key={info.index}
        style={{ marginTop: info.index === 0 ? 0 : 16 }}
        text={`"${info.item}"`}
      />
    )}
  />
)
