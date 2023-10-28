import { ThemeProvider } from "./theme/ThemeProvider"
import { LandingPage } from "./components/pages/LandingPage.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
