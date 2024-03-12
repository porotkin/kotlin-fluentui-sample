package team.porotkin.components

import fluentui.Breadcrumb
import fluentui.BreadcrumbDivider
import fluentui.BreadcrumbItem
import react.FC
import react.dom.html.ReactHTML.div
import team.porotkin.hooks.useUsers

val Header = FC {
    val users = useUsers()

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
