package io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable

import fluentui.Button
import fluentui.Input
import fluentui.Temp49.Companion.transparent
import fluentui.icons.PenRegular
import io.github.porotkin.entities.UserAlbum
import io.github.porotkin.hooks.useUpdateUserAlbum
import js.objects.jso
import react.FC
import react.Props
import react.create
import react.useState
import web.events.EventHandler

external interface AlbumTitleWithInlineInputProps : Props {
    var value: ExtendedUserAlbum
}

internal val AlbumTitleWithInlineInput = FC<AlbumTitleWithInlineInputProps> { props ->
    val updateUserAlbum = useUpdateUserAlbum()

    var value by useState(props.value.title)
    var editMode by useState(false)
    var inputValue by useState(props.value.title)

    if (editMode) {
        Input {
            defaultValue = value
            onChange = EventHandler { event ->
                inputValue = event.getValueFromEvent()
            }
        }

        Button {
            onClick = EventHandler {
                value = inputValue
                editMode = false
                val changedUserAlbum: UserAlbum = jso {
                    title = inputValue
                    userId = props.value.userId
                    id = props.value.id
                }
                updateUserAlbum(changedUserAlbum)
            }
            appearance = transparent

            +"Save"
        }
    } else {
        +value

        if (props.value.expandable) {
            Button {
                onClick = EventHandler { editMode = true }
                icon = PenRegular.create()
                appearance = transparent
            }
        }
    }
}

private fun Any?.getValueFromEvent(): String =
    this.asDynamic().target.value.unsafeCast<String>()
