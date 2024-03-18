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
import team.porotkin.utils.Insets
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.fr

val UsersPage = FC {
    val users = useUsers()
    val navigate = useNavigate()

    ReactHTML.div {
        style = jso {
            display = Display.grid
            marginLeft = Insets.Common.MEDIUM
            marginRight = Insets.Common.MEDIUM

            marginTop = Insets.Common.SMALL
            marginBottom = Insets.Common.SMALL

            gridTemplateRows = web.cssom.repeat(3, 1.fr)
            gridTemplateColumns = web.cssom.repeat(3, 1.fr)
            gap = Insets.Common.SMALL
        }

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