import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
	return (
		<Routes>
			{ routesConfig.map(({ element, path }) => (
				<Route
					key={ path }
					path={path}
					element={(
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">
								{ element }
							</div>
						</Suspense>
					)}
				/>
			))}
		</Routes>
	)
}

export default AppRouter;