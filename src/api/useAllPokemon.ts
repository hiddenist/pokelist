import { useQuery } from "@tanstack/react-query"
import { api } from "./pokemonApi"
import React from "react"
import { getSortedPokemon } from "./getSortedPokemon"

export const useAllPokemon = () => {
  const query = useQuery({
    queryKey: ["allPokemon"],
    queryFn: async () => {
      const { count } = await api.listPokemons(0, 1)
      const { results } = await api.listPokemons(0, count)
      return results
    },
  })

  return {
    ...query,
    byName: React.useMemo(
      () => getSortedPokemon(query.data ?? [], "name"),
      [query.data]
    ),
  }
}
