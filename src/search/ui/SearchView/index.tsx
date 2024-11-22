import React from 'react'
import { View } from 'react-native'
import { SearchQueryInputView } from '../SearchQueryInputView'
import { SearchButtonView } from '../SearchButtonView'
import { SearchHistoryToggleView } from '../SearchHistoryToggleView'

interface Props {
  query: string
  onQueryChange: (text: string) => void
  onSubmit: () => void
  queryInputTestID?: string
  buttonTestID?: string
  isHistoryEnabled: boolean
  onHistoryToggle: () => void
  onHistoryClear: () => void
  historyButtonTestID?: string
}

export const SearchView: React.FC<Props> = ({
  query,
  onQueryChange,
  onSubmit,
  queryInputTestID,
  buttonTestID,
  isHistoryEnabled,
  onHistoryToggle,
  onHistoryClear,
  historyButtonTestID,
}) => (
  <View
    style={{
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    }}>
    <SearchQueryInputView
      style={{ flex: 1 }}
      query={query}
      onQueryChange={onQueryChange}
      onSubmit={onSubmit}
      testID={queryInputTestID}
    />
    <SearchButtonView onPress={onSubmit} testID={buttonTestID} />
    <SearchHistoryToggleView
      isEnabled={isHistoryEnabled}
      onToggle={onHistoryToggle}
      onClear={onHistoryClear}
      buttonTestID={historyButtonTestID}
    />
  </View>
)
