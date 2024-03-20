@file:OptIn(ExperimentalJsExport::class)

import js.array.ReadonlyArray
import js.import.import
import js.promise.catch
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import web.animations.requestAnimationFrame
import web.dom.document
import web.html.HTMLDivElement

external interface SlideShowProps : Props {
    var loop: Boolean?
    var active: String?
    var autoplay: Boolean?
    var controls: String?
    var values: ReadonlyArray<Image>
}

external interface Image {
    val src: String
    val alt: String
    var id: Int
}

val MainJs = import<ComponentModule<*>>("@porotkin/slide-show")
val Css = import<ComponentModule<*>>("@porotkin/slide-show/build/slide-show.css")

@JsExport()
val SlideShowElement = FC<SlideShowProps> { props ->
    val ref = useRef<HTMLDivElement>(null)

    useEffectOnce {
        val view = document.createElement("slide-show")
        ref.current?.appendChild(view)

        MainJs
            .then { Css }
            .then {
                for (image in props.values) {
                    val photo = document.createElement("img")
                    with(photo.asDynamic()) {
                        src = image.src
                        alt = image.alt
                        id = image.id
                        draggable = false
                    }
                    view.appendChild(photo)
                }
            }.then {
                // TODO: Remove
                val style = document.createElement("link")
                style.asDynamic().rel = "stylesheet"
                style.asDynamic().href = "slide-show-shadow.css"
                view.shadowRoot?.appendChild(style)
            }.then {
                requestAnimationFrame {
                    with(view.asDynamic()) {
                        loop = false
                        controls = props.controls ?: "navigation"
                        active = props.active
                    }
                }
            }.catch {
                console.error(it)
            }
    }

    Suspense {
        fallback = h3.create { +"Web component is lazy-loading" }
        div {
            this.ref = ref
        }
    }
}