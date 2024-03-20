package io.github.porotkin.entities

import js.array.ReadonlyArray

external interface User {
    var id: Key
    var name: String
    var email: String
    var phone: String
    var website: String
}

typealias Users = ReadonlyArray<User>
