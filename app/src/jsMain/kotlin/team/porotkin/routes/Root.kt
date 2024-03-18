package team.porotkin.routes

import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import react.router.Outlet
import team.porotkin.components.Header
import team.porotkin.components.Navigation
import web.cssom.pct

val Root = FC {
    div {
        style = jso {
            width = 100.pct
            height = 100.pct
        }

        Header()
        Navigation()

        Outlet()
    }
}