import { StoryDefault, Story } from "@ladle/react"
import { PokemonCard } from "./PokemonCard"

export default {
  title: "Pokemon List",
  args: {
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    name: "bulbasaur",
    hasSprite: true,
    isLoading: false,
  },
} satisfies StoryDefault<StoryProps>

type StoryProps = {
  spriteUrl?: string
  name?: string
  hasSprite?: boolean
  isLoading?: boolean
}

export const Card: Story<StoryProps> = ({ isLoading, spriteUrl, name, hasSprite = true }) => {
  return (
    <PokemonCard
      pokemonName={name}
      spriteUrl={spriteUrl || undefined}
      hasSprite={hasSprite}
      isLoading={isLoading}
    />
  )
}
