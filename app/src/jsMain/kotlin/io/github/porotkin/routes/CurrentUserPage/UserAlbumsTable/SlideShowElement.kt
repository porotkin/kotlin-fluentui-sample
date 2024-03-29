package io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable

import Image
import SlideShowProps
import io.github.porotkin.entities.AlbumPhotos
import js.import.import
import js.objects.jso
import react.*
import react.dom.html.ReactHTML.div

internal val SlideShowElement = lazy {
    import<ComponentModule<SlideShowProps>>("../../kotlin-slideshow/kotlin/kotlin-slideshow.mjs").then {
        return@then getDefaultizedSlideShow(it)
    }
}

internal val SlideShow = FC<SlideShowProps> { props ->
    Suspense {
        fallback = div.create { +"Loading album photos" }
        SlideShowElement {
            values = props.values
            controls = "navigation fullscreen"
            active = props.active
        }
    }
}

internal fun AlbumPhotos.toSlideShowValues() = this.map {
    val value = jso<Image> {
        src = it.url
        alt = "preview for $${it.title}"
        id = it.id
    }

    return@map value
}.toTypedArray()

private fun getDefaultizedSlideShow(it: ComponentModule<SlideShowProps>): ComponentModule<SlideShowProps> {
    it.asDynamic().default = it.asDynamic().SlideShowElement.get()
    return it
}
