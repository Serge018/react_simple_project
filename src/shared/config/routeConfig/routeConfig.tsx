import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
	[ AppRoutes.MAIN ] : '/',
	[ AppRoutes.ABOUT ] : '/about'
}

export const routesConfig: RouteProps[] = [
	{
		path : RoutePaths.main,
		element: <MainPage />
	},
	{
		path : RoutePaths.about,
		element: <AboutPage />
	}
]