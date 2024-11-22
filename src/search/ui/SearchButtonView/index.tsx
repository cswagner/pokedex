import React from 'react'
import { ButtonView } from '../../../ui/ButtonView'
import SearchIcon from '../../../../assets/images/search.svg'

interface Props {
  onPress: () => void
  onLongPress: () => void
  testID?: string
}

export const SearchButtonView: React.FC<Props> = ({
  onPress,
  onLongPress,
  testID,
}) => (
  <ButtonView onPress={onPress} onLongPress={onLongPress} testID={testID}>
    <SearchIcon width={24} height={24} />
  </ButtonView>
)
