import React from 'react'
import { View } from 'react-native'

interface Props {
  color: string
  radius: number
}

export const LightView: React.FC<Props> = ({ color, radius }) => (
  <View
    style={{
      backgroundColor: color,
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
      borderWidth: 2,
      borderColor: 'lightgray',
    }}
  />
)
