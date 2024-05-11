import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof MainPage>;

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