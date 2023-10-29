import { StoryDefault, Story } from "@ladle/react"
import { RadioLabel } from "./RadioLabel"

export default {
  title: "Radio",
} satisfies StoryDefault

export const Labelled: Story = () => {
  return (
    <RadioLabel
      id="my-radio-button"
      label="text"
      value="myValue"
      setValue={console.log}
    />
  )
}
