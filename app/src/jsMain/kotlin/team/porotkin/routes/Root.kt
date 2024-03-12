package team.porotkin.routes

import react.FC
import react.router.Outlet
import team.porotkin.components.Header

val Root = FC {
    Header()

    Outlet()
}