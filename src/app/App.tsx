import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'helpers/classNames/classNames';

const App = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={ classNames('app', {}, [ theme ] ) }>
			<button onClick={ toggleTheme } >Toggle Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/about'} element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;