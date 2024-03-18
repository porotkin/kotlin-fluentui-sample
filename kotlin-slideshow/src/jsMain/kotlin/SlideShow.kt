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
    var id: Int
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
                        id = it.id
                        draggable = false
                    }
                    view.appendChild(photo)
                }
            }, 500)
        }

        viewRef.current = view
    }

    useEffect(viewRef.current) {
        if (viewRef.current == null) {
            return@useEffect
        }

        setTimeout({
            with(viewRef.current.asDynamic()) {
                loop = false
                controls = props.controls ?: "navigation"
                active = props.active
            }
        }, 500)
    }

    div {
        this.ref = ref
    }
}