import styled from "@emotion/styled"

export const Card = styled.div(({ theme }) => ({
  backgroundColor: theme.color.background.section,
  border: `1px solid ${theme.color.stroke}`,
  borderRadius: theme.cornerRadius,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.5),
}))
