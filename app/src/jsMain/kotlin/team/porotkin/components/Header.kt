package team.porotkin.components

import react.FC
import react.dom.html.ReactHTML.div
import team.porotkin.hooks.useUsers

val Header = FC {
    val users = useUsers()

    for (user in users) {
        div {
            +"User: ${user.name}"
        }
    }
}
