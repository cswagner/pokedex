import React from 'react'
import { ButtonView } from '../../../ui/ButtonView'
import SearchHistoryIcon from '../../../../assets/images/history.svg'

interface Props {
  onPress: () => void
  testID?: string
}

export const SearchHistoryButtonView: React.FC<Props> = ({
  onPress,
  testID,
}) => (
  <ButtonView onPress={onPress} testID={testID}>
    <SearchHistoryIcon width={24} height={24} />
  </ButtonView>
)
