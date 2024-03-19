package team.porotkin.routes

import ImageGenerator
import fluentui.Button
import js.buffer.ArrayBuffer
import js.buffer.ArrayBufferLike
import js.objects.jso
import js.typedarrays.Uint8Array
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.img
import react.useState
import team.porotkin.utils.Insets
import web.blob.Blob
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px
import web.url.URL

val ImageGeneratorPage = FC {
    var generatedImage by useState<ArrayBuffer?>(null)

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
                ImageGenerator.generateImage(
                    width = 800,
                    height = 600,
                    quality = 80,
                    callback = { err, image ->
                        console.log(err)
                        generatedImage = image.asDynamic().data.buffer
                    }
                )
            }

            +"Generate image"
        }

        if (generatedImage != null) {
            img {
                src = URL.createObjectURL(
                    Blob(
                        blobParts = arrayOf(Uint8Array(generatedImage.unsafeCast<ArrayBufferLike>())),
                        options = jso {
                            type = "image/jpeg"
                        }
                    )
                )
                alt = "generated image"
                width = 800.0
                height = 600.0
            }
        }
    }
}