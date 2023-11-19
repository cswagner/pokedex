import React, { PropsWithChildren } from 'react'
import { TouchableOpacity, View } from 'react-native'

const defaultColor = '#333333'
const defaultRadius = 24

interface Props {
  color?: string
  radius?: number
  onPress?: () => void
  testID?: string
}

export const ButtonView: React.FC<PropsWithChildren<Props>> = ({
  color = defaultColor,
  radius = defaultRadius,
  children,
  onPress,
  testID,
}) => (
  <TouchableOpacity onPress={onPress} testID={testID}>
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
)
