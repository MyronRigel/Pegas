import Catalog from './pages/Catalog'
import Auth from './pages/Auth'
import AddPanel from './pages/AddPanel'
import * as routes from './utils/consts'
import CarPage from './pages/CarPage'
import Homepage from './pages/Homepage'

export const authRoutes = [
    {
        path: routes.CATALOG_ADD_ROUTE,
        Component: AddPanel
    },
    {
        path: routes.CAR_PAGE_ROUTE + '/:id',
        Component: CarPage
    }
]

export const publicRoutes = [
    {
        path: routes.CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: routes.REGISTER_ROUTE,
        Component: Auth
    },
    {
        path: routes.LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: routes.HOME_PAGE,
        Component: Homepage
    }
]