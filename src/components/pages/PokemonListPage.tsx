import React from "react"
import { RadioGroup } from "../ui/RadioGroup"
import { PokemonList } from "../ui/PokemonList"
import { usePokemonList } from "../../api/usePokemonList"
import styled from "@emotion/styled"
import { Button } from "../ui/Button"
import { SortBy } from "../../api/getSortedPokemon"

const sortOptions = [
  { id: "sortByName", label: "Sort Name", value: "name" },
  { id: "sortById", label: "Sort ID", value: "id" },
] as const

export const PokemonListPage = () => {
  const [sortBy, setSortBy] = React.useState<SortBy>("id")
  const [page, setPage] = React.useState(1)
  const { data: pokemon = [], pages } = usePokemonList({ page, sortBy })

  return (
    <Page>
      <header>
        <h1 className="typography-h3">All the Pokemon!</h1>
        <RadioGroup value={sortBy} setValue={setSortBy} options={sortOptions} />
      </header>
      <PokemonList pokemon={pokemon} />
      <footer>
        <nav aria-label="pagination">
          <Button
            disabled={page <= 1}
            onClick={() => setPage((p) => (p > 1 ? p - 1 : p))}
          >
            Previous
          </Button>
          <Button
            disabled={page >= pages}
            onClick={() => setPage((p) => (p < pages ? p + 1 : p))}
          >
            Next
          </Button>
        </nav>
      </footer>
    </Page>
  )
}

const Page = styled.div(({ theme }) => ({
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  height: "100%",
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    h1: {
      margin: 0,
    },
  },
  footer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    nav: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}))
