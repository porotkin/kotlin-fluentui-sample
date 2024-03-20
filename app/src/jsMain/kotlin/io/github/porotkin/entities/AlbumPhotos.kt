package io.github.porotkin.entities

external interface AlbumPhoto {
    var id: Key
    var albumId: Key
    var title: String
    var url: String
    var thumbnailUrl: String
}

typealias AlbumPhotos = Array<out AlbumPhoto>
