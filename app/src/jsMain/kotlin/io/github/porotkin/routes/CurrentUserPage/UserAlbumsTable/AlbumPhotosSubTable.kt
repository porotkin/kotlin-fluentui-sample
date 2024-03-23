package io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable

import emotion.react.css
import io.github.porotkin.entities.AlbumPhotos
import js.objects.jso
import react.FC
import react.Props
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.tr
import tanstack.react.table.flexRender
import tanstack.table.core.Cell
import tanstack.table.core.Row
import web.cssom.Padding
import web.cssom.px

external interface AlbumPhotosSubTableProps : Props {
    var row: Row<ExtendedUserAlbum>
    var albumPhotos: AlbumPhotos
}

internal val AlbumPhotosSubTable = FC<AlbumPhotosSubTableProps> { props ->
    for (albumPhoto in props.albumPhotos) {
        tr {
            key = "SubRow-${props.row.id}-${albumPhoto.id}"
            props.row.getVisibleCells().map { cell ->
                td {
                    key = "SubCell-${cell.id}"
                    css {
                        padding = Padding(10.px, 12.px)
                        height = 175.px // Image height + insets
                    }

                    +flexRender(
                        cell.column.columnDef.cell,
                        cell.mapOriginalTo(
                            jso {
                                id = albumPhoto.id
                                title = albumPhoto.title
                                thumbnailUrl = albumPhoto.thumbnailUrl
                                url = albumPhoto.url
                                albumPhotos = props.albumPhotos
                                expandable = false
                            }
                        )
                    )
                }
            }
        }
    }
}

private fun Cell<ExtendedUserAlbum, out Any?>.mapOriginalTo(
    value: ExtendedUserAlbum,
) = sequenceOf(this.getContext()).map {
    val result = js.objects.Object.assign(js("{}"), it)

    result.row = js.objects.Object.assign(js("{}"), this.getContext().row)
    result.row.original = value

    result
}.first()
