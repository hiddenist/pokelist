import { ThemeProvider } from "./theme/ThemeProvider"
import { PokemonListPage } from "./components/pages/PokemonListPage.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./api/queryClient"

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <PokemonListPage />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
