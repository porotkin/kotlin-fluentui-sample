package team.porotkin.components

import SlideShowProps
import react.FC
import react.Props
import react.Suspense
import react.dom.html.ReactHTML.div
import react.useRef
import web.dom.document

external interface SlideShowElementProps : SlideShowProps, Props

val SlideShowElement = FC<SlideShowElementProps>("SlideShowElement") {
    val ref = useRef(initialValue = document.createElement("slide-show"))

    div {
        this.ref = ref
    }
}


val SlideShow = FC<SlideShowElementProps> {
    Suspense {
        div {
            lazy {
                SlideShowElement {}
            }
        }
    }
}
