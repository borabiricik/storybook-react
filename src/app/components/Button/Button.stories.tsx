import type { Meta, StoryObj } from "@storybook/react"

import Button from "."

export default {
  component: Button,
  render: () => <Button>My button !</Button>,
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {}
