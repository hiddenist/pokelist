import { Global, useTheme } from "@emotion/react"
import React from "react"

export const GlobalStyles = () => {
  const theme = useTheme()

  const styles = React.useMemo(() => ({
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: theme.color.background.page,
      // fontFamily: theme.typography.fontFamily,
    }
  }), [theme])

  return <Global styles={styles} />
}