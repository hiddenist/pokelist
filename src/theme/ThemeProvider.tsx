import React from "react"
import { ThemeProvider as BaseThemeProvider } from "@emotion/react"
import theme from "./theme"
import { GlobalStyles } from "./GlobalStyles"

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <BaseThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </BaseThemeProvider>
)
