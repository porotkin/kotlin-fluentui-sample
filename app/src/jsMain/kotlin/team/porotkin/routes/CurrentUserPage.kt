package team.porotkin.routes

import fluentui.*
import js.objects.jso
import react.FC
import react.create
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import team.porotkin.components.UserAlbumsTable
import team.porotkin.hooks.useUserAlbumsCoroutine
import team.porotkin.hooks.useUsers
import team.porotkin.utils.Insets
import web.cssom.FlexDirection
import web.cssom.pct

val CurrentUserPage = FC {
    val navigate = useNavigate()
    val users = useUsers()
    val userAlbums = useUserAlbumsCoroutine() // useUserAlbums()

    div {
        style = jso {
            display = web.cssom.Display.flex
            height = 91.pct
        }

        InlineDrawer {
            open = true
            separator = true

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
                Card {
                    users.forEach { user ->
                        Button {
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