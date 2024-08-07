import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('@views/Home'));

class Route {
    constructor(
        public path: string = '',
        public element: React.JSX.Element,
    ) {}
}

class AppRoutes {
    public static HomePage: Route = new Route('/', <Home />);

    public static routes = [AppRoutes.HomePage];
}

export const Routes = () => {
    const routes = useRoutes(AppRoutes.routes);

    return routes;
};
