package io.github.porotkin.routes

import emotion.react.css
import fluentui.*
import fluentui.icons.GlobePersonRegular
import io.github.porotkin.hooks.useUsers
import io.github.porotkin.utils.Insets
import io.github.porotkin.utils.Sizes
import react.FC
import react.create
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.b
import react.dom.html.ReactHTML.div
import react.router.useNavigate
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.fr

internal val UsersPage = FC {
    val users = useUsers()
    val navigate = useNavigate()

    ReactHTML.div {
        css {
            display = Display.grid
            paddingLeft = Insets.Common.MEDIUM
            paddingRight = Insets.Common.MEDIUM

            paddingTop = Insets.Common.SMALL
            paddingBottom = Insets.Common.SMALL

            gridTemplateRows = web.cssom.repeat(3, 1.fr)
            gridTemplateColumns = web.cssom.repeat(3, 1.fr)
            gap = Insets.Common.SMALL
        }

        for (user in users) {
            Card {
                CardHeader {
                    image = GlobePersonRegular.create {
                        css {
                            width = Sizes.CardImage.LARGE
                            height = Sizes.CardImage.LARGE
                        }
                    }
                    header = Body1.create {
                        b {
                            +user.name
                        }
                    }
                    description = Caption1.create {
                        div {
                            css {
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
                                a {
                                    href = "http://${user.website}"

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