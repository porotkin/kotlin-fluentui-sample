package io.github.porotkin.components

import emotion.react.css
import fluentui.Title2
import io.github.porotkin.utils.Insets
import react.FC
import react.dom.html.ReactHTML.div
import web.cssom.NamedColor
import web.cssom.pct
import web.cssom.px

val Header = FC {
    div {
        css {
            width = 100.pct
            height = 65.px
            backgroundColor = NamedColor.blueviolet
            paddingTop = Insets.Common.SMALL
        }

        Title2 {
            css {
                paddingLeft = Insets.Common.MEDIUM
                color = NamedColor.white
            }

            +"Kotlin FluentUI Sample"
        }
    }
}
