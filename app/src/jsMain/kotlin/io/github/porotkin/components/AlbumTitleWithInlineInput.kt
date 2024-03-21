package io.github.porotkin.components

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

external interface AlbumTitleWithInlineInputProps : Props {
    var value: ExtendedUserAlbum
}

internal val AlbumTitleWithInlineInput = FC<AlbumTitleWithInlineInputProps> { props ->
    val updateUserAlbum = useUpdateUserAlbum()

    var value by useState(props.value.title)
    var editMode by useState(false)
    var inputValue by useState("")

    if (editMode) {
        Input {
            defaultValue = value
            onChange = {
                inputValue = it.getValueFromEvent()
            }
        }

        Button {
            onClick = {
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

        Button {
            onClick = { editMode = true }
            icon = PenRegular.create()
            appearance = transparent
        }
    }
}

private fun Any?.getValueFromEvent(): String =
    this.asDynamic().target.value.unsafeCast<String>()
