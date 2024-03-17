@file:OptIn(ExperimentalJsExport::class)

import js.import.import
import react.*
import react.dom.html.ReactHTML.div
import web.dom.document
import web.html.HTMLDivElement
import web.html.HTMLElement
import web.timers.setTimeout

external interface SlideShowProps : Props {
    var loop: Boolean?
    var active: String?
    var autoplay: Boolean?
    var controls: String?
    var values: Array<out Image>
}

external interface Image {
    val src: String
    val alt: String
}

@JsExport()
val SlideShowElement = FC<SlideShowProps> { props ->
    val ref = useRef<HTMLDivElement>(null)
    val viewRef = useRef<HTMLElement>(null)

    import<ComponentModule<*>>("@porotkin/slide-show")
    import<ComponentModule<*>>("@porotkin/slide-show/build/slide-show.css")

    useEffectOnce {
        val view = document.createElement("slide-show")
        ref.current?.appendChild(view)

        view.asDynamic().loop = false
        view.asDynamic().controls = "navigation"

        val style = document.createElement("link")
        style.asDynamic().rel = "stylesheet"
        style.asDynamic().href = "slide-show-shadow.css"
        view.shadowRoot?.appendChild(style)

        props.values.let {
            setTimeout({
                it.forEach {
                    val photo = document.createElement("img")
                    with(photo.asDynamic()) {
                        src = it.src
                        alt = it.alt
                        draggable = false
                    }
                    view.appendChild(photo)
                }
            }, 500)
        }

        viewRef.current = view
    }

    div {
        this.ref = ref
    }
}