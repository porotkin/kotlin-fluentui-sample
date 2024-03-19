import web.blob.Blob

@JsModule("js-image-generator")
external object ImageGenerator {
    fun generateImage(
        width: Int,
        height: Int,
        quality: Int,
        callback: (error: Any, data: Blob) -> Unit,
    ): Nothing
}
