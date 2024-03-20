package io.github.porotkin.hooks

import io.github.porotkin.ALBUM_PHOTOS_QUERY_KEY
import io.github.porotkin.entities.AlbumPhotos
import io.github.porotkin.entities.Key
import js.objects.jso
import js.promise.Promise
import tanstack.query.core.QueryKey
import tanstack.react.query.useQuery
import web.http.fetchAsync

internal data class AlbumPhotosQueryResult(
    val data: AlbumPhotos,
    val isLoading: Boolean,
)

internal fun useAlbumPhotos(albumId: Key): AlbumPhotosQueryResult {
    val result = useQuery<AlbumPhotos, Error, AlbumPhotos, QueryKey>(
        options = jso {
            queryKey = QueryKey(ALBUM_PHOTOS_QUERY_KEY, albumId)
            queryFn = { getAlbumPhotos(albumId) }
        },
    )
    return AlbumPhotosQueryResult(data = result.data ?: emptyArray(), isLoading = result.isLoading)
}

private fun getAlbumPhotos(albumId: Key): Promise<AlbumPhotos> =
    fetchAsync("https://jsonplaceholder.typicode.com/albums/$albumId/photos")
        .then { it.json() }
        .then { it.unsafeCast<AlbumPhotos>() }
