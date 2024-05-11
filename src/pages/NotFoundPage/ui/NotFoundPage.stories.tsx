import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof NotFoundPage>;

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