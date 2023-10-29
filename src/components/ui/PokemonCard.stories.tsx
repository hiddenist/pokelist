import { StoryDefault, Story } from "@ladle/react"
import { PokemonCard } from "./PokemonCard"

export default {
  title: "Card",
  args: {
    pokedexNumber: 1,
    name: "bulbasaur",
  },
} satisfies StoryDefault<StoryProps>

type StoryProps = {
  pokedexNumber: number
  name: string
}

export const Pokemon: Story<StoryProps> = ({ pokedexNumber, name }) => {
  return (
    <PokemonCard
      pokemon={{
        sprites: {
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`,
        },
        name: name,
      }}
    />
  )
}