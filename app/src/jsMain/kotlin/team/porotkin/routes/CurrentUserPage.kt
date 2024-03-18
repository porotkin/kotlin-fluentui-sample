package team.porotkin.routes

import fluentui.*
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import team.porotkin.components.UserAlbumsTable
import team.porotkin.hooks.useUserAlbumsCoroutine
import team.porotkin.hooks.useUsers
import web.cssom.pct

val CurrentUserPage = FC {
    val navigate = useNavigate()
    val users = useUsers()
    val userAlbums = useUserAlbumsCoroutine() // useUserAlbums()

    div {
        style = jso {
            display = web.cssom.Display.flex
            width = 100.pct
            height = 93.pct
        }

        InlineDrawer {
            open = true
            separator = true

            DrawerHeader {
                DrawerHeaderTitle {
                    +"All Users"
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

        UserAlbumsTable {
            this.userAlbums = userAlbums
        }
    }
}