package team.porotkin.routes

import js.objects.jso
import react.create
import react.router.dom.createHashRouter

val hashRouter = createHashRouter(
    routes = arrayOf(
        jso {
            path = "/"
            Component = Root
            children = arrayOf(
                jso {
                    index = true
                    element = UsersPage.create()
                },
                jso {
                    path = ":userId"
                    element = CurrentUserPage.create()
                },
            )
        },
    ),
)
