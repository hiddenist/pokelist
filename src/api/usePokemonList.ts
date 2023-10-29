import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useAllPokemon } from "./useAllPokemon"
import { getPageSlice } from "./getPageSlice"
import { fetchPokemonDetails } from "./fetchPokemonDetails"
import { SortBy } from "./getSortedPokemon"

export const usePokemonList = ({
  page = 1,
  perPage = 20,
  sortBy = "id",
}: { page?: number; perPage?: number; sortBy?: SortBy } = {}) => {
  const { data: byId, byName, isSuccess } = useAllPokemon()
  const queryClient = useQueryClient()
  const query = useQuery({
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
    placeholderData: (previousData) => previousData ?? [],
    enabled: isSuccess,
  })

  const numberOfPokemon = byId?.length ?? 0

  return {
    ...query,
    totalResults: numberOfPokemon,
    pages: Math.ceil(numberOfPokemon / perPage),
  }
}
