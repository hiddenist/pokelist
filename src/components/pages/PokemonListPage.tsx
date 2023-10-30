import React from "react"
import { RadioGroup } from "../ui/RadioGroup"
import { PokemonList } from "../ui/PokemonList"
import { usePokemonList } from "../../api/usePokemonList"
import styled, { Interpolation } from "@emotion/styled"
import { Button } from "../ui/Button"
import { SortBy } from "../../api/getSortedPokemon"
import { Theme } from "@emotion/react"
import { Loader } from "../ui/Loader"

const sortOptions = [
  { id: "sortByName", label: "Sort Name", value: "name" },
  { id: "sortById", label: "Sort ID", value: "id" },
] as const

export const PokemonListPage = () => {
  const [sortBy, setSortBy] = React.useState<SortBy>("id")
  const [page, setPage] = React.useState(1)
  const perPage = 12
  const [totalPages, setTotalPages] = React.useState(0)

  return (
    <Page>
      <header>
        <h1 className="typography-h3">All the Pokemon!</h1>
        <RadioGroup value={sortBy} setValue={setSortBy} options={sortOptions} />
      </header>
      <main>
        <div className="overflow">
          <React.Suspense fallback={<Loader>Booting the Pokédex...</Loader>}>
            <PokemonListApi
              sortBy={sortBy}
              page={page}
              perPage={perPage}
              onSetTotalPages={setTotalPages}
            />
          </React.Suspense>
        </div>
      </main>
      <footer>
        <nav aria-label="pagination">
          <Button
            disabled={page <= 1}
            onClick={() => setPage((p) => (p > 1 ? p - 1 : p))}
          >
            Previous {perPage}
          </Button>
          <Button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
          >
            Next {perPage}
          </Button>
        </nav>
      </footer>
    </Page>
  )
}

const PokemonListApi: React.FC<{
  page: number
  sortBy: SortBy
  perPage: number
  onSetTotalPages: (totalPages: number) => void
}> = ({ page, sortBy, perPage, onSetTotalPages }) => {
  const { data: pokemon = [], pages } = usePokemonList({
    page,
    sortBy,
    perPage,
  })

  React.useEffect(() => {
    onSetTotalPages(pages)
  }, [pages, onSetTotalPages])

  return <PokemonList pokemon={pokemon} />
}

const Page = styled.div(({ theme }) => ({
  padding: theme.spacing(6),
  "@media (max-width: 700px)": {
    padding: theme.spacing(3),
  },
  display: "flex",
  flexDirection: "column",
  flex: 1,
  maxHeight: "100vh",
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    alignItems: "center",
    h1: {
      margin: 0,
    },
    "@media (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  main: {
    ...scrollFadeShadow(theme.color.background.page, theme.spacing(1.5)),
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    ".overflow": {
      flexGrow: 1,
      overflow: "auto",
      padding: theme.spacing(4, 0),
    },
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    nav: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}))

const scrollFadeShadow = (color: string, size: string) =>
  ({
    position: "relative",
    overflow: "hidden",
    "&:before": {
      boxShadow: `inset 0px ${size} ${size} -${size} ${color}, inset 0px -${size} ${size} -${size} ${color}`,
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      pointerEvents: "none",
      zIndex: 1,
      width: "100%",
      height: "100%",
    },
  }) satisfies Interpolation<Theme>
