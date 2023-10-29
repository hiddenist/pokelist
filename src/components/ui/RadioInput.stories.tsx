import { StoryDefault, Story } from "@ladle/react"
import { RadioInput } from "./RadioInput.tsx"

export default {
  title: "Radio",
} satisfies StoryDefault

export const Input: Story = () => {
  return <RadioInput value="myValue" setValue={console.log} />
}
