package io.github.porotkin.hooks

import io.github.porotkin.ALBUM_PHOTOS_QUERY_KEY
import io.github.porotkin.entities.AlbumPhotos
import io.github.porotkin.entities.Key
import js.objects.jso
import js.promise.Promise
import react.useMemo
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
    val data = useMemo(result.data) {
        result.data ?: emptyArray()
    }

    return AlbumPhotosQueryResult(
        data = data,
        isLoading = result.isLoading,
    )
}

private fun getAlbumPhotos(albumId: Key): Promise<AlbumPhotos> =
    fetchAsync("https://jsonplaceholder.typicode.com/albums/$albumId/photos")
        .then { it.jsonAsync() }
        .then { it.unsafeCast<AlbumPhotos>() }
