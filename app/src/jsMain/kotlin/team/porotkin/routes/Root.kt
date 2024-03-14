package team.porotkin.routes

import react.FC
import react.router.Outlet
import team.porotkin.components.Header
import team.porotkin.components.Navigation

val Root = FC {
    Header()
    Navigation()

    Outlet()
}