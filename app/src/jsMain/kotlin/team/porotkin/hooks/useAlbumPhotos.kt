package team.porotkin.hooks

import js.objects.jso
import js.promise.Promise
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
import team.porotkin.USER_ALBUMS_QUERY_KEY
import team.porotkin.entities.AlbumPhotos
import team.porotkin.entities.Key
import web.http.fetchAsync

data class AlbumPhotosQueryResult(
    val data: AlbumPhotos,
    val isLoading: Boolean,
)

fun useAlbumPhotos(albumId: Key): AlbumPhotosQueryResult {
    val result = useQuery<AlbumPhotos, Error, AlbumPhotos, QueryKey>(
        options = jso {
            queryKey = QueryKey(USER_ALBUMS_QUERY_KEY, albumId)
            queryFn = { getAlbumPhotos(albumId) }
        },
    )
    return AlbumPhotosQueryResult(data = result.data ?: emptyArray(), isLoading = result.isLoading)
}

private fun getAlbumPhotos(albumId: Key): Promise<AlbumPhotos> =
    fetchAsync("https://jsonplaceholder.typicode.com/albums/$albumId/photos")
        .then { it.json() }
        .then { it.unsafeCast<AlbumPhotos>() }
