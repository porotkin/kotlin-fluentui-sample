package io.github.porotkin.components

import emotion.react.css
import fluentui.Button
import fluentui.Title2
import io.github.porotkin.utils.Insets
import react.FC
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import web.cssom.*
import web.events.EventHandler

internal val Header = FC {
    val navigate = useNavigate()

    div {
        css {
            width = 100.vw
            maxHeight = 65.px
            height = 15.pct
            backgroundColor = NamedColor.blueviolet
            paddingTop = Insets.Common.SMALL
            display = Display.flex
            gap = Insets.Common.MEDIUM
        }

        Title2 {
            css {
                paddingLeft = Insets.Common.MEDIUM
                color = NamedColor.white
            }

            +"Kotlin FluentUI Sample"
        }

        Button {
            css {
                width = 150.px
                height = 35.px
            }
            onClick = EventHandler { navigate("/generate") }

            +"Generate Image"
        }
    }
}
