import React from 'react'
import { StyleProp, TextInput, ViewStyle } from 'react-native'

const defaultBackgroundColor = '#52ae5f'
const defaultTextColor = 'black'

interface Props {
  query: string
  onQueryChange: (text: string) => void
  onSubmit: () => void
  style?: StyleProp<ViewStyle>
  backgroundColor?: string
  textColor?: string
  testID?: string
}

export const SearchQueryInputView: React.FC<Props> = ({
  query,
  onQueryChange,
  onSubmit,
  style = {},
  backgroundColor = defaultBackgroundColor,
  textColor = defaultTextColor,
  testID,
}) => (
  <TextInput
    style={[
      style,
      {
        padding: 16,
        backgroundColor,
        color: textColor,
      },
    ]}
    selectionColor={textColor}
    defaultValue={query}
    onSubmitEditing={onSubmit}
    onChangeText={onQueryChange}
    autoCorrect={false}
    inputMode="search"
    returnKeyType="search"
    testID={testID}
  />
)
