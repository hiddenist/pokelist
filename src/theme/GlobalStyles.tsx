import { Global, Theme, useTheme } from "@emotion/react"
import React, { CSSProperties } from "react"
import { Interpolation } from "@emotion/styled"

export const GlobalStyles = () => {
  const theme = useTheme()

  const styles = React.useMemo<Interpolation<Theme>>(
    () => ({
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      "html, body, #root": {
        height: "100%",
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: theme.color.background.page,
        ...theme.typography.body1,
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
      },
      h1: theme.typography.h1,
      h2: theme.typography.h2,
      h3: theme.typography.h3,
      h4: theme.typography.h4,
      h5: theme.typography.h5,
      h6: theme.typography.h6,
      "button, input[type=submit], input[type=button]": theme.typography.button,
      ...Object.entries(theme.typography).reduce<Record<string, CSSProperties>>(
        (acc, [typographyLabel, styles]) => ({
          ...acc,
          [`.typography-${typographyLabel}`]: styles,
        }),
        {}
      ),
    }),
    [theme]
  )

  return <Global styles={styles} />
}
