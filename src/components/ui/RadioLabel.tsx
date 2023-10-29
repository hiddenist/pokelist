import React from "react"
import styled from "@emotion/styled"
import { RadioInput, RadioInputProps } from "./RadioInput"

export interface RadioLabelProps<T extends string | number>
  extends Omit<React.HTMLProps<HTMLDivElement>, "label" | "as" | "value">,
    Pick<RadioInputProps<T>, "value" | "setValue" | "checked"> {
  label: React.ReactNode
  id: string
  radioProps?: Omit<RadioInputProps<T>, "value" | "setValue" | "checked">
}

export const RadioLabel = <T extends string | number>({
  id,
  label,
  value,
  setValue,
  radioProps,
  checked,
  ...divProps
}: RadioLabelProps<T>) => {
  return (
    <RadioWrapper {...divProps}>
      <RadioInput
        id={id}
        value={value}
        setValue={setValue}
        checked={checked}
        {...radioProps}
      />
      <label htmlFor={id}>{label}</label>
    </RadioWrapper>
  )
}

const RadioWrapper = styled.div(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1), // Figma has 16px padding on the right, but I'm choosing to handle it as a gap in the parent
  gap: theme.spacing(1),
  alignItems: "center",
}))
