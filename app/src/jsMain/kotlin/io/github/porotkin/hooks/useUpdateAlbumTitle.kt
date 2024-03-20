package io.github.porotkin.hooks

import io.github.porotkin.USER_ALBUMS_QUERY_KEY
import io.github.porotkin.entities.UserAlbum
import js.objects.jso
import js.promise.Promise
import tanstack.query.core.QueryKey
import tanstack.react.query.useMutation
import tanstack.react.query.useQueryClient
import web.http.BodyInit
import web.http.fetchAsync

typealias UpdateUserAlbum = (UserAlbum) -> Unit

fun useUpdateUserAlbum(): UpdateUserAlbum {
    val client = useQueryClient()
    return useMutation<UserAlbum, Error, UserAlbum, QueryKey>(
        options = jso {
            mutationFn = { userAlbum -> updateUserAlbum(userAlbum) }
            onSuccess = { data, _, _ ->
                client.invalidateQueries(
                    filters = jso {
                        queryKey = QueryKey(USER_ALBUMS_QUERY_KEY, data.userId)
                    }
                )
            }
        }
    ).mutate.unsafeCast<UpdateUserAlbum>()
}

private fun updateUserAlbum(value: UserAlbum): Promise<UserAlbum> =
    fetchAsync(
        input = "https://jsonplaceholder.typicode.com/albums/${value.id}",
        init = jso {
            method = "PUT"
            body = BodyInit(JSON.stringify(value))
        }
    ).then { it.json() }.then { it.unsafeCast<UserAlbum>() }