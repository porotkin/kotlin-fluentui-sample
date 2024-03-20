package io.github.porotkin.hooks

import io.github.porotkin.USER_ALBUMS_QUERY_KEY
import io.github.porotkin.entities.UserAlbums
import js.objects.jso
import js.promise.Promise
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.router.useParams
import react.useEffect
import react.useMemo
import react.useState
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
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

fun useUserAlbumsCoroutine(): UserAlbums {
    val currentUserId = useParams()["userId"]
    var userAlbums by useState<UserAlbums>(emptyArray())

    useEffect(currentUserId) {
        val job = MainScope().launch {
            getUserAlbums(currentUserId!!).then {
                userAlbums = it
            }
        }

        cleanup {
            job.cancel()
        }
    }

    return useMemo(userAlbums) {
        userAlbums
    }
}

private fun getUserAlbums(userId: String): Promise<UserAlbums> =
    fetchAsync("https://jsonplaceholder.typicode.com/users/$userId/albums")
        .then { it.json() }
        .then { it.unsafeCast<UserAlbums>() }
