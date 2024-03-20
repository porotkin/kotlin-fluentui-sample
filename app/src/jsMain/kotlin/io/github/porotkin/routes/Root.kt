package io.github.porotkin.routes

import io.github.porotkin.components.Header
import io.github.porotkin.components.Navigation
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import react.router.Outlet
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