import { Pokemon } from '../Pokemon'
import { PokemonGateway } from './PokemonGateway'

export class NetworkPokemonGatewayImpl implements PokemonGateway {
  byName: (name: string) => Promise<Pokemon> = name =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name.trim().toLowerCase()}`,
    )
      .then(response => response.json())
      .then(json => ({
        id: json.id,
        name: json.name,
      }))
}
