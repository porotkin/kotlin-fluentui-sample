package team.porotkin.routes

import fluentui.*
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import team.porotkin.hooks.useUsers
import web.cssom.Globals.Companion.inherit

val CurrentUserPage = FC {
    val users = useUsers()

    div {
        style = jso {
            display = web.cssom.Display.flex
            width = inherit
            height = inherit
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
                p { +"Drawer Body" }
            }
        }

        div {
            users.forEach {
                Breadcrumb {
                    BreadcrumbItem {
                        +it.name
                    }
                    BreadcrumbDivider
                }
            }
        }
    }
}