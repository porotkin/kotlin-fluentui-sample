package team.porotkin.routes

import fluentui.*
import js.objects.jso
import react.FC
import react.create
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import react.router.useParams
import team.porotkin.components.UserAlbumsTable
import team.porotkin.hooks.useUserAlbumsCoroutine
import team.porotkin.hooks.useUsers
import team.porotkin.utils.Insets
import web.cssom.FlexDirection
import web.cssom.Length.Companion.maxContent
import web.cssom.pct

val CurrentUserPage = FC {
    val navigate = useNavigate()
    val users = useUsers()
    val userAlbums = useUserAlbumsCoroutine() // useUserAlbums()

    val currentUserId = useParams()["userId"]

    div {
        style = jso {
            display = web.cssom.Display.flex
            height = 91.pct
        }

        InlineDrawer {
            open = true
            separator = true
            style = jso {
                minWidth = maxContent
            }

            DrawerHeader {
                style = jso {
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
                    style = jso {
                        display = web.cssom.Display.flex
                        flexDirection = FlexDirection.column
                        gap = Insets.Common.SMALL
                    }

                    users.forEach { user ->
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
            style = jso {
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