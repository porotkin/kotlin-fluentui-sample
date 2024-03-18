package team.porotkin.components

import fluentui.Title2
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import team.porotkin.utils.Insets
import web.cssom.NamedColor
import web.cssom.pct
import web.cssom.px

val Header = FC {
    div {
        style = jso {
            width = 100.pct
            height = 65.px
            backgroundColor = NamedColor.blueviolet
            paddingTop = Insets.Common.SMALL
        }

        Title2 {
            style = jso {
                marginLeft = Insets.Common.MEDIUM
                color = NamedColor.white
            }

            +"Kotlin FluentUI Sample"
        }
    }
}
