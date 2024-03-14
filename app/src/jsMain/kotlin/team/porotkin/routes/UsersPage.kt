package team.porotkin.routes

import fluentui.Card
import react.FC
import react.dom.html.ReactHTML
import react.router.dom.Link
import team.porotkin.hooks.useUsers

val UsersPage = FC {
    val users = useUsers()

    ReactHTML.div {
        users.forEach {
            Card {
                Link {
                    to = "/${it.id}"

                    +it.name
                }
            }
        }
    }
}