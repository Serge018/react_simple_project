import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'shared/Spinner',
	component: Spinner,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {}
};

export const PrimaryDark: Story = {
	decorators : [
		ThemeDecorator(Theme.DARK)
	],
	args: {}
};
