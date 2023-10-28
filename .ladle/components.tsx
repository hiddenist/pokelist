import type { GlobalProvider } from "@ladle/react";
import { ThemeProvider } from "../src/theme/ThemeProvider"

export const Provider: GlobalProvider = ({
 children,
}) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)
