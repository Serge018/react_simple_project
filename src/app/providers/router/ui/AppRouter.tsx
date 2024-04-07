import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<Routes>
				{ routesConfig.map(({ element, path }) => (
					<Route
						key={ path }
						path={path}
						element={(
							<Suspense fallback={<div>Загрузка...</div>}>
								<div className="page-wrapper">
									{ element }
								</div>
							</Suspense>
						)}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter;