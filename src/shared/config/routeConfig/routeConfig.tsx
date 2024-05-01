import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
	[ AppRoutes.MAIN ] : '/',
	[ AppRoutes.ABOUT ] : '/about',
	[ AppRoutes.NOT_FOUND ] : '*',
}

export const routesConfig: RouteProps[] = [
	{
		path : RoutePaths.main,
		element: <MainPage />
	},
	{
		path : RoutePaths.about,
		element: <AboutPage />
	},
	{
		path : RoutePaths.not_found,
		element: <NotFoundPage />
	}
]