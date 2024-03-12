package team.porotkin.routes

import fluentui.Breadcrumb
import fluentui.BreadcrumbDivider
import fluentui.BreadcrumbItem
import react.FC
import react.dom.html.ReactHTML
import team.porotkin.hooks.useUsers

val UsersPage = FC {
    val users = useUsers()

    ReactHTML.div {
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