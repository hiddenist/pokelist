import React from "react"
import styled from "@emotion/styled"

export interface RadioInputProps<T extends string | number>
  extends Omit<React.HTMLProps<HTMLInputElement>, "type" | "as" | "value"> {
  value: T | null | undefined
  setValue: (newValue: T) => void
}

export const RadioInput = <T extends string | number>({
  setValue,
  value,
  ...radioProps
}: RadioInputProps<T>) => {
  return (
    <Radio
      type="radio"
      {...radioProps}
      value={value ?? undefined}
      onChange={(e) => {
        radioProps?.onChange?.(e)
        if (!e.isDefaultPrevented() && e.target.checked) {
          setValue(e.target.value as T)
        }
      }}
    />
  )
}

const Radio = styled.input(({ theme }) => ({
  // custom styled radio button
  appearance: "none",
  margin: 0,
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  position: "relative",
  transition: "background-color 0.2s ease-in-out",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.neutral.$30,
    color: theme.palette.primary.$40,
  },
  "&:focus": {
    backgroundColor: theme.palette.primary.$10,
    outline: "none",
  },
  "&:before": {
    content: "''",
    borderRadius: "50%",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    display: "block",
    border: `1px solid currentColor`,
    position: "absolute",
  },
  "&:checked": {
    "&:before": {
      borderColor: "currentColor",
    },
    "&:after": {
      content: "''",
      borderRadius: "50%",
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      display: "block",
      backgroundColor: "currentColor",
      position: "absolute",
    },
  },
}))
