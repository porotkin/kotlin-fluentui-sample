package io.github.porotkin.routes

import emotion.react.css
import fluentui.*
import io.github.porotkin.components.UserAlbumsTable
import io.github.porotkin.hooks.useUserAlbumsCoroutine
import io.github.porotkin.hooks.useUsers
import io.github.porotkin.utils.Insets
import react.FC
import react.create
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import react.router.useParams
import web.cssom.FlexDirection
import web.cssom.Length.Companion.maxContent
import web.cssom.pct

val CurrentUserPage = FC {
    val navigate = useNavigate()
    val users = useUsers()
    val userAlbums = useUserAlbumsCoroutine() // useUserAlbums()

    val currentUserId = useParams()["userId"]

    div {
        css {
            display = web.cssom.Display.flex
            height = 91.pct
        }

        InlineDrawer {
            open = true
            separator = true
            css {
                minWidth = maxContent
            }

            DrawerHeader {
                css {
                    paddingTop = Insets.Common.SMALL
                }
                DrawerHeaderTitle {
                    heading = Title3.create {
                        +"All Users"
                    }
                }
            }

            DrawerBody {
                div {
                    css {
                        display = web.cssom.Display.flex
                        flexDirection = FlexDirection.column
                        gap = Insets.Common.SMALL
                    }

                    for (user in users) {
                        Card {
                            selected = user.id.toString() == currentUserId
                            onClick = { navigate("/${user.id}") }

                            +user.name
                        }
                    }
                }
            }
        }

        div {
            css {
                display = web.cssom.Display.flex
                flexDirection = FlexDirection.column
                padding = Insets.Common.SMALL
                width = 100.pct
            }

            Title3 {
                +"User info"
            }

            UserAlbumsTable {
                this.userAlbums = userAlbums
            }
        }
    }
}