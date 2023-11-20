import { Pokemon } from '../Pokemon'
import { PokemonGateway } from './PokemonGateway'

export class NetworkPokemonGatewayImpl implements PokemonGateway {
  byName: (name: string) => Promise<Pokemon> = name => {
    const id = name.trim().toLowerCase()

    return Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(response =>
        response.json(),
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>
        response.json(),
      ),
    ]).then(([species, pokemon]) => ({
      id: species.id,
      name: species.name,
      imageUrl: pokemon.sprites.front_default,
    }))
  }
}
