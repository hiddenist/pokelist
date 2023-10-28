import { StoryDefault, Story } from "@ladle/react"
import { PokemonCard } from "./PokemonCard.tsx"

export default {} satisfies StoryDefault

export const Default: Story = () => {
  return (
    <PokemonCard
      pokemon={{
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        name: "bulbasaur",
      }}
    />
  )
}
