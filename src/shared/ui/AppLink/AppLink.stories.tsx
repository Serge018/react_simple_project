import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: { to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	}
};

export const Secondary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	}
};

export const PrimaryDark: Story = {
	decorators : [
		ThemeDecorator(Theme.DARK)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.PRIMARY
	}
};

export const SecondaryDark: Story = {
	decorators : [
		ThemeDecorator(Theme.DARK)
	],
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY
	}
};

