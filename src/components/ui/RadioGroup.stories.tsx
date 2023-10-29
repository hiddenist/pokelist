import { StoryDefault, Story } from "@ladle/react"
import { RadioGroup } from "./RadioGroup"
import React from "react"

export default {
  title: "Radio",
} satisfies StoryDefault

export const Group: Story = () => {
  const [value, setValue] = React.useState<number>()
  return (
    <RadioGroup
      value={value}
      setValue={(v) => {
        setValue(v)
        console.log(v)
      }}
      options={[
        { id: "1", label: "One", value: 1 },
        { id: "2", label: "Two", value: 2 },
        { id: "3", label: "Three", value: 3 },
      ]}
    />
  )
}
