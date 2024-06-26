package io.github.porotkin

import fluentui.FluentProvider
import fluentui.tokens.teamsLightTheme
import io.github.porotkin.routes.hashRouter
import react.FC
import react.Props
import react.create
import react.dom.client.createRoot
import react.router.RouterProvider
import tanstack.query.core.QueryClient
import tanstack.react.query.QueryClientProvider
import web.dom.document
import web.html.HTML.div

fun main() {
    val root = document.createElement(div)
    document.body.appendChild(root)

    createRoot(root)
        .render(App.create())
}

private val QueryClient = QueryClient()

private val App = FC<Props> {
    QueryClientProvider {
        client = QueryClient

        FluentProvider {
            theme = teamsLightTheme

            RouterProvider {
                router = hashRouter
            }
        }
    }
}
