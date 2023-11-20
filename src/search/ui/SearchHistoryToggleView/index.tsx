import React from 'react'
import { View } from 'react-native'
import { SearchHistoryButtonView } from '../SearchHistoryButtonView'
import { LightView } from '../../../ui/LightView'

interface Props {
  isEnabled: boolean
  onToggle: () => void
  buttonTestID?: string
}

export const SearchHistoryToggleView: React.FC<Props> = ({
  isEnabled,
  onToggle,
  buttonTestID,
}) => (
  <View
    style={{
      flexDirection: 'row',
      padding: 8,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      columnGap: 8,
    }}>
    <SearchHistoryButtonView onPress={onToggle} testID={buttonTestID} />
    <LightView color={isEnabled ? 'orange' : 'black'} radius={8} />
  </View>
)
