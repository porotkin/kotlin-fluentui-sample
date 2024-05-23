package io.github.porotkin.routes

import GENERATE_IMAGE_COMMAND
import emotion.react.css
import fluentui.Button
import io.github.porotkin.utils.Insets
import js.import.import
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img
import react.useEffectOnce
import react.useState
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px
import web.events.EventHandler
import web.events.EventTarget
import web.events.addEventHandler
import web.messaging.MessageEvent
import web.url.URL
import web.workers.Worker

internal val ImageGeneratorPage = FC {
    var generatedImageUrl by useState<String?>(null)

    useEffectOnce {
        imageGeneratorWorker.onImageGenerated {
            console.log("Generated image url: $this")
            generatedImageUrl = this
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
            onClick = EventHandler {
                imageGeneratorWorker.generateImage()
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

private val imageGeneratorWorker by lazy { ImageGeneratorWorker() }

private fun ImageGeneratorWorker(): Worker =
    Worker(
        URL(
            "../../kotlin-image-generator/kotlin/kotlin-image-generator.mjs",
            import.meta.url,
        ),
    )

private fun Worker.onImageGenerated(
    handler: ImageSrc.() -> Unit,
): () -> Unit {
    return addEventHandler(MessageEvent.message<String, EventTarget>()) {
        handler(it.data)
    }
}

private fun Worker.generateImage() {
    postMessage(GENERATE_IMAGE_COMMAND)
}

private typealias ImageSrc = String?
