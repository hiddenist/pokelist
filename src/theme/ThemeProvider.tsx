import React from "react"
import { ThemeProvider as BaseThemeProvider } from "@emotion/react"
import theme from "./theme.ts"
import { GlobalStyles } from "./GlobalStyles.tsx"

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <BaseThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </BaseThemeProvider>
)
