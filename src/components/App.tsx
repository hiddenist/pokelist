import { ThemeProvider } from "../theme/ThemeProvider.tsx"
import { PokemonListPage } from "./pages/PokemonListPage.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../api/queryClient.ts"

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
