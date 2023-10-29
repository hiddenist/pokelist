export type SortBy = "name" | "id"
export const getSortedPokemon = (
  pokemonSortedByNumber: ReadonlyArray<{ name: string }>,
  sortBy: SortBy
) => {
  return sortBy == "name"
    ? [...pokemonSortedByNumber].sort((a, b) => a.name.localeCompare(b.name))
    : pokemonSortedByNumber
}
