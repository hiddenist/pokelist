import { QueryClient } from "@tanstack/react-query"
import { Pokemon } from "pokenode-ts"
import { api } from "./pokemonApi"

export const fetchPokemonDetails = async (
  pokemonName: string,
  queryClient: QueryClient
) => {
  const cachedPokemon = queryClient.getQueryData<Pokemon>([
    "pokemonByName",
    pokemonName,
  ])
  if (cachedPokemon) {
    return cachedPokemon
  }
  return await api.getPokemonByName(pokemonName).then((data) => {
    queryClient.setQueryData(["pokemonByName", data.name], data)
    queryClient.setQueryData(["pokemonById", data.id], data)
    if (data.sprites.front_default != null) {
      new Image().src = data.sprites.front_default
    }
    return data
  })
}
