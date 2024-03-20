package io.github.porotkin.hooks

import io.github.porotkin.USERS_QUERY_KEY
import io.github.porotkin.entities.Users
import js.objects.jso
import js.promise.Promise
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
import web.http.fetchAsync

internal fun useUsers(): Users {
    val result = useQuery<Users, Error, Users, QueryKey>(
        options = jso {
            queryKey = USERS_QUERY_KEY
            queryFn = { getUsers() }
        },
    )
    return result.data ?: emptyArray()
}

private fun getUsers(): Promise<Users> =
    fetchAsync("https://jsonplaceholder.typicode.com/users")
        .then { it.json() }
        .then { it.unsafeCast<Users>() }
