import styled from "@emotion/styled"

export const Button = styled.button(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid currentColor`,
  color: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.neutral.$30,
  },
  "&:focus": {
    outline: "none",
    backgroundColor: theme.palette.primary.$10,
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    color: theme.palette.neutral.$40,
  },
}))
