import React from 'react'
import { ActivityIndicator, Image, ScrollView, View } from 'react-native'
import { PokemonState } from '../../state'
import ErrorIcon from '../../../../assets/images/error.svg'
import { TextView } from '../../../ui/TextView'

interface Props {
  state: PokemonState
}

export const PokemonView: React.FC<Props> = ({ state }) => (
  <ScrollView
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    contentContainerStyle={{
      alignItems: 'center',
      padding: 16,
      rowGap: 16,
    }}
    keyboardDismissMode="on-drag">
    <View
      style={{
        width: '75%',
        aspectRatio: 1,
        backgroundColor: '#333333',
        borderWidth: 16,
        borderColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {state.type === 'loading' && (
        <ActivityIndicator color="white" size="large" />
      )}
      {state.type === 'error' && <ErrorIcon width={48} height={48} />}
      {state.type === 'success' && (
        <Image
          width={192}
          height={192}
          source={{
            uri: state.pokemon.imageUrl,
          }}
        />
      )}
    </View>
    <TextView
      style={{ width: '75%' }}
      text={
        state.type === 'success'
          ? `#${state.pokemon.id} ${state.pokemon.name.toUpperCase()}`
          : ''
      }
    />
  </ScrollView>
)
