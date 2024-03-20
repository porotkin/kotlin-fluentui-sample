package io.github.porotkin.entities

import js.array.ReadonlyArray

external interface AlbumPhoto {
    var id: Key
    var albumId: Key
    var title: String
    var url: String
    var thumbnailUrl: String
}

typealias AlbumPhotos = ReadonlyArray<AlbumPhoto>
