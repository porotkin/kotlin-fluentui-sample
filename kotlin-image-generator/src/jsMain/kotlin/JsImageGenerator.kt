import web.blob.Blob

@JsModule("js-image-generator")
external object JsImageGenerator {
    fun generateImage(
        width: Int,
        height: Int,
        quality: Int,
        callback: (error: Throwable, data: Blob) -> Unit,
    )
}