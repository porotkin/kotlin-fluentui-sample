package team.porotkin.components

import js.import.import
import js.objects.jso
import react.*
import react.dom.html.ReactHTML.div
import team.porotkin.entities.AlbumPhotos
import web.cssom.px

// TODO: Duplicated from kotlin-slideshow to prevent bundling
external interface SlideShowProps : Props {
    var loop: Boolean?
    var active: String?
    var autoplay: Boolean?
    var values: Array<out Image>
}

// TODO: Duplicated from kotlin-slideshow to prevent bundling
external interface Image {
    var src: String
    var alt: String
}

val SlideShowElement = lazy {
    import<ComponentModule<SlideShowProps>>("../../kotlin-slideshow/kotlin/kotlin-slideshow.mjs").then {
        it.asDynamic().default = it.asDynamic().SlideShowElement.get()
        return@then it
    }
}

val SlideShow = FC<SlideShowProps> { props ->
    Suspense {
        fallback = div.create { +"Loading album photos" }
        div {
            style = jso {
                maxWidth = 600.px
                maxHeight = 600.px
            }

            SlideShowElement {
                values = props.values
            }
        }
    }
}

fun AlbumPhotos.toSlideShowValues() = this.map {
    val value = jso<Image> {
        src = it.url
        alt = "preview for $${it.title}"
    }

    return@map value
}.toTypedArray()
