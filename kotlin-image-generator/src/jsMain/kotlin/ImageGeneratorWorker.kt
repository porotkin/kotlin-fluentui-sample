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

const val GENERATE_IMAGE_COMMAND = "generateImage"

private external val self: Worker

private fun main() {
    self.addEventHandler(MessageEvent.message<String, EventTarget>()) {
        if (it.data === GENERATE_IMAGE_COMMAND) {
            JsImageGenerator.generateImage(
                width = 800,
                height = 600,
                quality = 80,
                callback = { _, image ->
                    val imageBuffer = image.getDataBuffer()
                    val imageUrl = generateImageUrlFrom(imageBuffer)

                    self.postMessage(imageUrl)
                }
            )
        }
    }
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
