package io.github.porotkin.routes

import emotion.react.css
import fluentui.Button
import generateImage
import io.github.porotkin.utils.Insets
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img
import react.useState
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px

internal val ImageGeneratorPage = FC {
    var generatedImageUrl by useState<String?>(null)

    ReactHTML.div {
        css {
            padding = Padding(Insets.Common.SMALL, Insets.Common.MEDIUM)
            display = Display.flex
            flexDirection = FlexDirection.column
            gap = Insets.Common.SMALL
        }
        Button {
            css {
                width = 200.px
            }
            onClick = {
                MainScope().launch {
                    generateImage().then {
                        generatedImageUrl = it
                    }
                }
            }

            +"Generate image"
        }

        if (generatedImageUrl != null) {
            img {
                src = generatedImageUrl
                alt = "generated image"
                width = 800.0
                height = 600.0
            }
        }
    }
}