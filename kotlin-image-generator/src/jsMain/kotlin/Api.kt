import js.import.import
import js.objects.jso
import js.promise.Promise
import web.scheduling.awaitIdleCallback
import web.url.URL
import web.workers.Worker

typealias ImageSrc = String?

suspend fun generateImage(): Promise<ImageSrc> {
    var result: ImageSrc = undefined

    imageGenerator.addMessageHandler {
        console.log("Generated image url: $this")

        result = this
    }

    imageGenerator.post("generateImage")

    while (result == undefined) {
        awaitIdleCallback(jso {
            timeout = 100
        })
    }

    return Promise.resolve(result)
}

private val imageGenerator by lazy {
    Worker(
        URL(
            "../../kotlin-image-generator/kotlin/kotlin-image-generator.mjs",
            import.meta.url,
        )
    )
}
