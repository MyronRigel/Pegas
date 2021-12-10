import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes'
import {CATALOG_ROUTE} from '../utils/consts'
import {Context} from '../index'

const Router = () => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user._isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
                )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={CATALOG_ROUTE}  />
        </Switch>
    )
}

export default Router
