import React from "react"
import { Card } from "./Card"
import styled from "@emotion/styled"

export interface PokemonCardProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "as"> {
  as?: "div" | "li"
  pokemonName: string | undefined | null
  spriteUrl?: string | null
  hasSprite?: boolean
  isLoading?: boolean
}

const noSprite = new URL("/decamark.png", import.meta.url).href
const transparentPixel =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="

export const PokemonCard: React.FC<PokemonCardProps> = ({
  title,
  spriteUrl,
  hasSprite = true,
  pokemonName,
  isLoading,
  ...cardProps
}) => {
  return (
    <StyledCard aria-busy={isLoading} aria- isLoading={isLoading} {...cardProps}>
      {hasSprite ? (
        <img src={spriteUrl ?? transparentPixel} alt={`sprite of ${pokemonName}`} />
      ) : (
        <img src={noSprite} alt={`unable to find a sprite for ${pokemonName}`} />
      )}
      <div className="typography-h5">{pokemonName}</div>
    </StyledCard>
  )
}

const StyledCard = styled(Card, {
  shouldForwardProp(p) {
    return p !== "isLoading"
  },
})<Pick<PokemonCardProps, "isLoading">>(({ theme, isLoading }) => ({
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

  ...(isLoading && {
    // animate the card when loading
    animation: "pulse 1s ease-in-out infinite",
    "@keyframes pulse": {
      "0%": {
        opacity: 0.5,
      },
      "50%": {
        opacity: 1,
      },
      "100%": {
        opacity: 0.5,
      },
    },
  }),
}))
