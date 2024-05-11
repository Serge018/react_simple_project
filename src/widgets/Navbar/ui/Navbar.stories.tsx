import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Dark: Story = {
	decorators : [
		ThemeDecorator(Theme.DARK)
	],
	args: {},
};