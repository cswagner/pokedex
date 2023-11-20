import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'

interface Props {
  text: string
  style?: StyleProp<ViewStyle>
}

export const TextView: React.FC<Props> = ({ text, style = {} }) => (
  <Text
    style={[
      style,
      {
        padding: 16,
        backgroundColor: '#333333',
        color: 'white',
        textAlign: 'center',
      },
    ]}>
    {text}
  </Text>
)
