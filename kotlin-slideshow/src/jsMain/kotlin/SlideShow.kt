@file:OptIn(ExperimentalJsExport::class)

import js.import.import
import js.promise.catch
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
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
    var values: Array<out Image>
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

        val job = MainScope().launch {
            MainJs
                .then { Css }
                .then {
                    props.values.let {
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
                    }
                }.then {
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

        cleanup {
            job.cancel()
        }
    }

    Suspense {
        fallback = h3.create { +"Web component is lazy-loading" }
        div {
            this.ref = ref
        }
    }
}