@file:OptIn(ExperimentalJsExport::class)

import js.array.ReadonlyArray
import js.import.importAsync
import js.promise.catch
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import web.animations.requestAnimationFrame
import web.dom.document
import web.html.HTML.img
import web.html.HTMLDivElement
import web.html.HTMLElement
import web.html.HtmlTagName

external interface SlideShowProps : Props {
    var loop: Boolean?
    var active: String?
    var autoplay: Boolean?
    var controls: String?
    var values: ReadonlyArray<Image>
}

external interface Image {
    var src: String
    var alt: String
    var id: Int
}

internal val MainJs = importAsync<ComponentModule<*>>("@porotkin/slide-show")
internal val Css = importAsync<ComponentModule<*>>("@porotkin/slide-show/build/slide-show.css")

@JsExport()
val SlideShowElement = FC<SlideShowProps> { props ->
    val ref = useRef<HTMLDivElement>(null)

    useEffectOnce {
        val view = document.createElement(slideShow)
        ref.current?.appendChild(view)

        MainJs
            .then { Css }
            .then {
                for (image in props.values) {
                    val photo = document.createElement(img).apply {
                        src = image.src
                        alt = image.alt
                        id = image.id.toString()
                        draggable = false
                    }

                    view.appendChild(photo)
                }
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

inline val slideShow: HtmlTagName<HTMLElement>
    get() = HtmlTagName("slide-show")