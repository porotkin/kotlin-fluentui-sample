package io.github.porotkin.routes

import emotion.react.css
import io.github.porotkin.components.Header
import io.github.porotkin.components.Navigation
import react.FC
import react.dom.html.ReactHTML.div
import react.router.Outlet
import web.cssom.pct

internal val Root = FC {
    div {
        css {
            width = 100.pct
            height = 100.pct
        }

        Header()
        Navigation()

        Outlet()
    }
}