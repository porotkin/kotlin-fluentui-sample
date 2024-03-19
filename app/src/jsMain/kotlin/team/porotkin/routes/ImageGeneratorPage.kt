package team.porotkin.routes

import fluentui.Button
import js.import.import
import js.objects.jso
import post
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img
import react.useEffectOnce
import react.useState
import team.porotkin.utils.Insets
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px
import web.url.URL
import web.workers.Worker

val imageGenerator by lazy {
    Worker(URL("../../worker-module/kotlin/worker-module.mjs", import.meta.url))
}

val ImageGeneratorPage = FC {
    var generatedImageUrl by useState<String?>(null)

    useEffectOnce {
        imageGenerator.onmessage = {
            console.log("Message: ", it)

            generatedImageUrl = it.data.toString()
        }

        cleanup {
            imageGenerator.terminate()
        }
    }

    ReactHTML.div {
        style = jso {
            padding = Padding(Insets.Common.SMALL, Insets.Common.MEDIUM)
            display = Display.flex
            flexDirection = FlexDirection.column
            gap = Insets.Common.SMALL
        }
        Button {
            style = jso {
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