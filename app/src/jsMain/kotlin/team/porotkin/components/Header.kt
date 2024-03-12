package team.porotkin.components

import fluentui.Title1
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import web.cssom.*

val Header = FC {
    div {
        style = jso {
            width = 100.pct
            height = 48.px
            border = Border(0.5.px, LineStyle.solid)
            backgroundColor = NamedColor.blueviolet
        }

        Title1 {
            style = jso {
                marginLeft = 23.px
                color = NamedColor.white
            }

            +"Kotlin FluentUI Sample"
        }
    }
}
