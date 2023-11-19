import React from 'react'
import { View } from 'react-native'
import { LightView } from '../LightView'

export const HeaderView: React.FC = () => (
  <View style={{ flexDirection: 'row', columnGap: 16, padding: 16 }}>
    <LightView color="blue" radius={36} />
    {['red', 'yellow', 'green'].map(color => (
      <LightView key={color} color={color} radius={12} />
    ))}
  </View>
)
