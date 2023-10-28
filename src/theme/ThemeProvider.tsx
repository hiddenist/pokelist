import React from "react"
import { ThemeProvider as BaseThemeProvider } from '@emotion/react'
import theme from "./theme.ts"

export const ThemeProvider:  React.FC<React.PropsWithChildren> = ({ children }) => (
  <BaseThemeProvider theme={theme}>
    {children}
  </BaseThemeProvider>
)