import React from "react"
import { Switch, Route } from "react-router-dom"
import routerConfig from "./router.config"

function RouterApp() {
  const routes = routerConfig()

  return (
    <Switch>
      {routes.map(route => (
        <Route 
        path={route.path}
        component={route.component} 
        key={route.name} 
        />
      ))}
    </Switch>
  )
}

export default RouterApp
