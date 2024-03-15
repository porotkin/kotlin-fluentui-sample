package team.porotkin.hooks

import js.objects.jso
import js.promise.Promise
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
import team.porotkin.USER_ALBUMS_QUERY_KEY
import team.porotkin.entities.AlbumPhotos
import web.http.fetchAsync

fun useAlbumPhotos(albumId: String): AlbumPhotos {
    val result = useQuery<AlbumPhotos, Error, AlbumPhotos, QueryKey>(
        options = jso {
            queryKey = QueryKey(USER_ALBUMS_QUERY_KEY, albumId)
            queryFn = { getAlbumPhotos(albumId) }
        },
    )
    return result.data ?: emptyArray()
}

private fun getAlbumPhotos(albumId: String): Promise<AlbumPhotos> =
    fetchAsync("https://jsonplaceholder.typicode.com/albums/$albumId/photos")
        .then { it.json() }
        .then { it.unsafeCast<AlbumPhotos>() }
