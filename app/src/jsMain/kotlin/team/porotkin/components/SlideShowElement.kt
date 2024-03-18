package team.porotkin.components

import js.import.import
import js.objects.jso
import react.*
import react.dom.html.ReactHTML.div
import team.porotkin.entities.AlbumPhotos

// TODO: Duplicated from kotlin-slideshow to prevent bundling
external interface SlideShowProps : Props {
    var loop: Boolean?
    var active: String?
    var autoplay: Boolean?
    var controls: String?
    var values: Array<out Image>
}

// TODO: Duplicated from kotlin-slideshow to prevent bundling
external interface Image {
    var src: String
    var alt: String
    var id: Int
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
        SlideShowElement {
            values = props.values
            controls = "navigation fullscreen"
            active = props.active
        }
    }
}

fun AlbumPhotos.toSlideShowValues() = this.map {
    val value = jso<Image> {
        src = it.url
        alt = "preview for $${it.title}"
        id = it.id
    }

    return@map value
}.toTypedArray()
