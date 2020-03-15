import React from "react"
import {NavLink} from "react-router-dom"
import RouterConfig from "core/router/router.config"


export const Menu = () => {
    const routes = RouterConfig()
    return(
        <div className="menu-box_container">
            {routes.map((route) => (
                <NavLink 
                exact 
                strict 
                to={route.path}
                key={route.name}
                >
                    {route.name}
                </NavLink>
            )
            )}
        </div>
    )
}