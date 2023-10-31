import { StoryDefault, Story } from "@ladle/react"
import { Loader } from "./Loader"

export default {
  args: {
    text: "Loading...",
  },
} satisfies StoryDefault<StoryProps>

type StoryProps = {
  text?: string
}

export const Card: Story<StoryProps> = ({ text }) => {
  return (
    <Loader>{text}</Loader>
  )
}
