package team.porotkin.components

import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import web.cssom.*

val Header = FC {
    div {
        style = jso {
            width = 100.pct
            height = 60.px
            border = Border(1.px, LineStyle.solid)
            backgroundColor = NamedColor.blueviolet
        }
    }
}
