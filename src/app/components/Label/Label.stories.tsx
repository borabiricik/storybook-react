import { Meta, StoryObj } from "@storybook/react"
import Label from "."

const meta: Meta<typeof Label> = {
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Basic: Story = {
  args: {
    children: "Hello world",
    className: "text-lg text-red-400",
  },
}
