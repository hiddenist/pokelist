import { StoryDefault, Story } from "@ladle/react"
import { Button } from "./Button.tsx"

export default {
  args: {
    label: "Click me!",
  },
} satisfies StoryDefault<StoryProps>

type StoryProps = {
  disabled?: boolean
  label?: string
}

export const Default: Story<StoryProps> = ({
  disabled,
  label = "Click me!",
}) => {
  return (
    <Button onClick={() => console.log("pika")} disabled={disabled}>
      {label}
    </Button>
  )
}

export const Disabled = Default.bind({})
Disabled.args = {
  disabled: true,
}
