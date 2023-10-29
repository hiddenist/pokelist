import { StoryDefault, Story } from "@ladle/react"
import { PokemonList } from "./PokemonList"
import { Pokemon } from "pokenode-ts"

export default {} satisfies StoryDefault<StoryProps>

type StoryProps = undefined

const pokemon = [
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
    },
    name: "bulbasaur",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
    },
    name: "ivysaur",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`,
    },
    name: "venusaur",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`,
    },
    name: "charmander",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`,
    },
    name: "charmeleon",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`,
    },
    name: "charizard",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`,
    },
    name: "squirtle",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
    },
    name: "wartortle",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png`,
    },
    name: "blastoise",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png`,
    },
    name: "caterpie",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png`,
    },
    name: "metapod",
  },
  {
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png`,
    },
    name: "butterfree",
  },
] as Pokemon[]

export const List: Story = () => {
  return <PokemonList pokemon={pokemon} />
}
