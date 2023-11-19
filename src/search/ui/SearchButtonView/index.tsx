import React from 'react'
import { ButtonView } from '../../../ui/ButtonView'
import SearchIcon from '../../../../assets/images/search.svg'

interface Props {
  onPress: () => void
  testID?: string
}

export const SearchButtonView: React.FC<Props> = ({ onPress, testID }) => (
  <ButtonView onPress={onPress} testID={testID}>
    <SearchIcon width={24} height={24} />
  </ButtonView>
)
