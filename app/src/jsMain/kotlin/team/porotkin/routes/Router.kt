package team.porotkin.routes

import js.objects.jso
import react.create
import react.router.dom.createBrowserRouter

val appRouter = createBrowserRouter(
    arrayOf(
        jso {
            path = "/"
            element = Root.create()
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
        }
    )
)
