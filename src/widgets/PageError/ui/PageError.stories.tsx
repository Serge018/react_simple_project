import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'widget/PageError',
	component: PageError,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		error: null
	},
};

export const Dark: Story = {
	decorators : [
		ThemeDecorator(Theme.DARK)
	],
	args: {
		error: null
	},
};