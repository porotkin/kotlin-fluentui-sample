package io.github.porotkin

import tanstack.query.core.QueryKey

internal val USERS_QUERY_KEY = QueryKey<QueryKey>("users")
internal val USER_ALBUMS_QUERY_KEY = QueryKey<QueryKey>("user-albums")
internal val ALBUM_PHOTOS_QUERY_KEY = QueryKey<QueryKey>("album-photos")
