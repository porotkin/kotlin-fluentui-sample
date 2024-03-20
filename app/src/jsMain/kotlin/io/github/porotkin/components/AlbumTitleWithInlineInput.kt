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
import tanstack.table.core.Row

external interface AlbumTitleWithInlineInputProps : Props {
    var row: Row<UserAlbum>
}

val AlbumTitleWithInlineInput = FC<AlbumTitleWithInlineInputProps> { props ->
    val updateUserAlbum = useUpdateUserAlbum()

    var value by useState(props.row.original.title)
    var editMode by useState(false)
    var inputValue by useState("")

    if (editMode) {
        Input {
            defaultValue = value
            onChange = {
                inputValue = it.asDynamic().target.value
            }
        }

        Button {
            onClick = {
                value = inputValue
                editMode = false
                val changedUserAlbum: UserAlbum = jso {
                    title = inputValue
                    userId = props.row.original.userId
                    id = props.row.original.id
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
