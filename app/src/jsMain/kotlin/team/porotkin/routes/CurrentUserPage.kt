package team.porotkin.routes

import fluentui.*
import react.FC
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import team.porotkin.hooks.useUsers

val CurrentUserPage = FC {
    val users = useUsers()

    div {
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