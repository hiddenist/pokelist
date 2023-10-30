import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useAllPokemon } from "./useAllPokemon"
import { getPageSlice } from "./getPageSlice"
import { fetchPokemonDetails } from "./fetchPokemonDetails"
import { SortBy } from "./getSortedPokemon"
import { Pokemon } from "pokenode-ts"
import React from "react"

export const usePokemonList = ({
  page = 1,
  perPage = 20,
  sortBy = "id",
}: { page?: number; perPage?: number; sortBy?: SortBy } = {}) => {
  const { data: byId, byName, isSuccess } = useAllPokemon()

  const placeholderData = React.useMemo(() => {
    return {
      id: byId
        ? getPageSlice(byId, page, perPage).map((p) => ({
            name: p.name,
            isLoading: true,
          }))
        : [],
      name: byName
        ? getPageSlice(byName, page, perPage).map((p) => ({
            name: p.name,
            isLoading: true,
          }))
        : [],
    } satisfies Record<SortBy, Partial<Pokemon & { isLoading: true }>[]>
  }, [byId, byName, page, perPage])

  const queryClient = useQueryClient()
  const query = useQuery<(Pokemon | Partial<Pokemon & { isLoading: true }>)[]>({
    queryKey: ["pokemonList", { page, perPage, sortBy }],
    queryFn: async () => {
      const allPokemon = sortBy == "name" ? byName : byId
      if (!allPokemon) {
        return []
      }

      // Prefetch the next page
      getPageSlice(allPokemon, page + 1, perPage).map((poke) =>
        fetchPokemonDetails(poke.name, queryClient)
      )

      return await Promise.all(
        getPageSlice(allPokemon, page, perPage).map((poke) =>
          fetchPokemonDetails(poke.name, queryClient)
        )
      )
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: (previousData) => previousData ?? placeholderData[sortBy],
    enabled: isSuccess,
  })

  const numberOfPokemon = byId?.length ?? 0

  return {
    ...query,
    totalResults: numberOfPokemon,
    pages: Math.ceil(numberOfPokemon / perPage),
  }
}
