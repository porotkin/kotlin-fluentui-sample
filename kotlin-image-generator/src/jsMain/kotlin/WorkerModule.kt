import js.buffer.ArrayBuffer
import js.buffer.ArrayBufferLike
import js.objects.jso
import js.typedarrays.Uint8Array
import web.blob.Blob
import web.events.EventTarget
import web.events.addEventHandler
import web.messaging.MessageEvent
import web.url.URL
import web.workers.Worker

private external val self: Worker

private fun main() {
    self.addMessageHandler {
        if (this === "generateImage") {
            ImageGenerator.generateImage(
                width = 800,
                height = 600,
                quality = 80,
                callback = { _, image ->
                    val imageBuffer = image.getDataBuffer()
                    val imageUrl = generateImageUrlFrom(imageBuffer)

                    self.post(imageUrl)
                }
            )
        }
    }
}

internal fun Worker.addMessageHandler(
    handler: String.() -> Unit,
): () -> Unit {
    return addEventHandler(MessageEvent.message<String, EventTarget>()) {
        handler(it.data)
    }
}

internal fun Worker.post(message: String) {
    postMessage(message)
}

private fun generateImageUrlFrom(imageBuffer: ArrayBuffer) = URL.createObjectURL(
    Blob(
        blobParts = arrayOf(
            Uint8Array(
                imageBuffer.unsafeCast<ArrayBufferLike>()
            ),
        ),
        options = jso {
            type = "image/jpeg"
        }
    )
)

private fun Blob.getDataBuffer(): ArrayBuffer =
    this.asDynamic().data.buffer
