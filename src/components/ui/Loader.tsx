import React from "react"
import styled from "@emotion/styled"

interface LoaderProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * @default true
   */
  animated?: boolean
}

const imgUrl = new URL("/poke-ball.png", import.meta.url).href

const BaseLoader: React.FC<LoaderProps> = ({
  children = "Loading...",
  ...props
}) => {
  return (
    <div {...props}>
      <SpinningImage src={imgUrl} alt="" role="progressbar" />
      {children}
    </div>
  )
}

const SpinningImage = styled.img({
  animation: "spin 1s linear infinite",
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
})

export const Loader = styled(BaseLoader)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  flex: 1,
  ...theme.typography.body2,
}))
