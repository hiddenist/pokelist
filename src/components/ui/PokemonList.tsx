import { Pokemon } from "pokenode-ts"
import React from "react"
import { PokemonCard } from "./PokemonCard"
import styled from "@emotion/styled"

export interface PokemonListProps {
  pokemon: (Pokemon | Partial<Pokemon & { isLoading: true }>)[]
}

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemon: pokemonList,
}) => {
  return (
    <List>
      {pokemonList.map((pokemon, i) => (
        <PokemonCard
          key={pokemon?.id || `unknown-${i}`}
          title={pokemon?.name}
          spriteUrl={pokemon?.sprites?.front_default}
          hasSprite={pokemon?.sprites?.front_default !== null}
          isLoading={"isLoading" in pokemon && pokemon?.isLoading}
          as="li"
        />
      ))}
    </List>
  )
}

const List = styled.ul(({ theme }) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "repeat(auto-fill, minmax(315px, 1fr))",
}))
