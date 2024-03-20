package io.github.porotkin.entities

external interface UserAlbum {
    var id: Key
    var userId: Key
    var title: String
}

typealias UserAlbums = Array<out UserAlbum>
