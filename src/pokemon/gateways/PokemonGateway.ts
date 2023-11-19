import { Pokemon } from '../Pokemon'

export interface PokemonGateway {
  byName: (name: string) => Promise<Pokemon>
}
