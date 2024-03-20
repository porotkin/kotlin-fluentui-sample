package io.github.porotkin.entities

import js.array.ReadonlyArray

external interface UserAlbum {
    var id: Key
    var userId: Key
    var title: String
}

typealias UserAlbums = ReadonlyArray<UserAlbum>
