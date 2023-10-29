import React from "react"
import { Card } from "./Card"
import { Pokemon } from "pokenode-ts"
import styled from "@emotion/styled"

export interface PokemonCardProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "as"> {
  as?: "div" | "li"
  pokemon: {
    sprites: Pick<Pokemon["sprites"], "front_default">
    name: Pokemon["name"]
  }
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  ...cardProps
}) => {
  return (
    <StyledCard {...cardProps}>
      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={`sprite of ${pokemon.name}`}
        />
      )}
      <div>{pokemon.name}</div>
    </StyledCard>
  )
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  img: {
    width: "72px",
    aspectRatio: "1 / 1",
    backgroundColor: theme.palette.offSpec.spriteBackground,
    borderRadius: "50%",
  },
  div: {
    // This should work for all current Pokémon names - there are a number with characters/etc in their names, detailed in Bulbapedia:
    // @see https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name
    textTransform: "capitalize",
    flex: 1,
  },
}))
