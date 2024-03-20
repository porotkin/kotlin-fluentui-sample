package io.github.porotkin.routes

import emotion.react.css
import fluentui.Button
import io.github.porotkin.utils.Insets
import js.import.import
import post
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img
import react.useEffectOnce
import react.useState
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px
import web.url.URL
import web.workers.Worker

val imageGenerator by lazy {
    Worker(
        URL(
            "../../kotlin-image-generator/kotlin/kotlin-image-generator.mjs",
            import.meta.url,
        )
    )
}

val ImageGeneratorPage = FC {
    var generatedImageUrl by useState<String?>(null)

    useEffectOnce {
        imageGenerator.onmessage = {
            console.log("Generated image url: ${it.data}")

            generatedImageUrl = it.data.toString()
        }
    }

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
                imageGenerator.post("generateImage")
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