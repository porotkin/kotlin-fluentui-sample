package team.porotkin.routes

import fluentui.*
import js.objects.jso
import react.FC
import react.create
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.b
import react.dom.html.ReactHTML.div
import react.router.dom.Link
import react.router.useNavigate
import team.porotkin.hooks.useUsers
import web.cssom.Display
import web.cssom.FlexDirection

val UsersPage = FC {
    val users = useUsers()
    val navigate = useNavigate()

    ReactHTML.div {
        users.forEach { user ->
            Card {
                CardHeader {
                    header = Body1.create {
                        b {
                            +user.name
                        }
                    }
                    description = Caption1.create {
                        div {
                            style = jso {
                                display = Display.flex
                                flexDirection = FlexDirection.column
                            }
                            div {
                                +"E-mail: ${user.email}"
                            }
                            div {
                                +"Phone: ${user.phone}"
                            }
                            div {
                                +"Website: "
                                Link {
                                    to = user.website

                                    +user.website
                                }
                            }
                        }
                    }
                }
                CardFooter {
                    Button {
                        onClick = { navigate("/${user.id}") }

                        +"Go to User Page"
                    }
                }
            }
        }
    }
}