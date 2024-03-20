package io.github.porotkin.components

import fluentui.Breadcrumb
import fluentui.BreadcrumbButton
import fluentui.BreadcrumbDivider
import fluentui.BreadcrumbItem
import io.github.porotkin.hooks.useUsers
import io.github.porotkin.utils.Insets
import js.objects.jso
import react.FC
import react.dom.html.ReactHTML.div
import react.router.useParams
import react.useMemo
import web.cssom.Display
import web.cssom.px

val Navigation = FC {
    val currentUserId = useParams()["userId"]
    val users = useUsers()

    val currentUser = useMemo(currentUserId, users) {
        users.find {
            it.id.toString() == currentUserId
        }
    }


    div {
        style = jso {
            display = Display.flex
            gap = 25.px

            paddingLeft = Insets.Common.MEDIUM
            paddingTop = Insets.Common.SMALL
        }

        Breadcrumb {
            BreadcrumbItem {
                BreadcrumbButton {
                    href = "#"

                    +"Home"
                }
            }
            currentUserId?.let {
                BreadcrumbDivider {}
                BreadcrumbItem {
                    BreadcrumbButton {
                        href = "#/$it"

                        +currentUser?.name.toString()
                    }
                }
            }
            BreadcrumbDivider {}
            BreadcrumbItem {
                BreadcrumbButton {
                    href = "#/generate"

                    +"Generate Image"
                }
            }
        }
    }
}
