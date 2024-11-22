import React from 'react'
import { ButtonView } from '../../../ui/ButtonView'
import SearchHistoryIcon from '../../../../assets/images/history.svg'

interface Props {
  onPress: () => void
  onLongPress: () => void
  testID?: string
}

export const SearchHistoryButtonView: React.FC<Props> = ({
  onPress,
  onLongPress,
  testID,
}) => (
  <ButtonView onPress={onPress} onLongPress={onLongPress} testID={testID}>
    <SearchHistoryIcon width={24} height={24} />
  </ButtonView>
)
