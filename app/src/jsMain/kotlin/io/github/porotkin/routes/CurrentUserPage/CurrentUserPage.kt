package io.github.porotkin.routes.CurrentUserPage

import emotion.react.css
import fluentui.*
import fluentui.Temp49.Companion.subtle
import fluentui.icons.Dismiss24Regular
import io.github.porotkin.hooks.useUserAlbumsCoroutine
import io.github.porotkin.hooks.useUsers
import io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable.UserAlbumsTable
import io.github.porotkin.utils.Insets
import react.FC
import react.create
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import react.router.useParams
import react.useState
import web.cssom.FlexDirection
import web.cssom.Globals.Companion.inherit
import web.cssom.Length.Companion.maxContent
import web.cssom.Overflow
import web.cssom.pct
import web.cssom.px
import web.events.EventHandler

internal val CurrentUserPage = FC {
    val navigate = useNavigate()
    val users = useUsers()
    val userAlbums = useUserAlbumsCoroutine() // useUserAlbums()
    var sidebarOpen by useState(false)

    val currentUserId = useParams()["userId"]

    div {
        css {
            display = web.cssom.Display.flex
            height = inherit
        }

        InlineDrawer {
            open = sidebarOpen
            separator = true
            css {
                minWidth = maxContent
                height = inherit
            }

            DrawerHeader {
                css {
                    paddingTop = Insets.Common.SMALL
                }
                DrawerHeaderTitle {
                    action = Button.create {
                        appearance = subtle
                        icon = Dismiss24Regular.create()
                        onClick = EventHandler { sidebarOpen = false }
                    }
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
                            onClick = EventHandler { navigate("/${user.id}") }

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
                gap = Insets.Common.SMALL
                width = 100.pct
                height = inherit
                overflow = Overflow.hidden
            }

            Title3 {
                +"User info"
            }

            Button {
                css {
                    width = 150.px
                    height = 35.px
                    flexShrink = web.cssom.number(0.0)
                }

                onClick = EventHandler { sidebarOpen = !sidebarOpen }

                +"Toggle sidebar"
            }

            UserAlbumsTable {
                this.userAlbums = userAlbums
            }
        }
    }
}