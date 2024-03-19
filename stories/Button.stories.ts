import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/common/button/Button";

const meta = {
	title: "Button",
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Button",
	},
};
