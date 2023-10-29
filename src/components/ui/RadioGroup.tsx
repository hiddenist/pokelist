import React from "react"
import styled from "@emotion/styled"
import { RadioLabel, RadioLabelProps } from "./RadioLabel"

export interface RadioGroup<T extends string | number>
  extends Omit<React.HTMLProps<HTMLDivElement>, "label" | "as" | "value">,
    Pick<RadioLabelProps<T>, "value" | "setValue"> {
  options: ReadonlyArray<{
    id: string
    label: React.ReactNode
    value: T
  }>
}

export const RadioGroup = <T extends string | number>({
  value,
  setValue,
  options,
  ...wrapperProps
}: RadioGroup<T>) => {
  return (
    <RadioGroupWrapper {...wrapperProps}>
      {options.map((option) => (
        <RadioLabel
          key={option.id}
          id={option.id}
          label={option.label}
          value={option.value}
          checked={option.value === value}
          setValue={(isSelected) => {
            if (isSelected) {
              setValue(option.value)
            }
          }}
        />
      ))}
    </RadioGroupWrapper>
  )
}

const RadioGroupWrapper = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}))
