package team.porotkin.hooks

import js.objects.jso
import js.promise.Promise
import react.router.useParams
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
import team.porotkin.USER_ALBUMS_QUERY_KEY
import team.porotkin.entities.UserAlbums
import web.http.fetchAsync

fun useUserAlbums(): UserAlbums {
    val currentUserId = useParams()["userId"]

    val result = useQuery<UserAlbums, Error, UserAlbums, QueryKey>(
        options = jso {
            queryKey = QueryKey(USER_ALBUMS_QUERY_KEY, currentUserId ?: "")
            queryFn = { getUserAlbums(currentUserId!!) }
            enabled = currentUserId != null
        },
    )
    return result.data ?: emptyArray()
}

private fun getUserAlbums(userId: String): Promise<UserAlbums> =
    fetchAsync("https://jsonplaceholder.typicode.com/users/$userId/albums")
        .then { it.json() }
        .then { it.unsafeCast<UserAlbums>() }