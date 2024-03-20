package io.github.porotkin.components

import fluentui.Button
import fluentui.Input
import fluentui.Temp49.Companion.transparent
import fluentui.icons.PenRegular
import io.github.porotkin.entities.UserAlbum
import react.FC
import react.Props
import react.create
import react.useState
import tanstack.table.core.Row

external interface AlbumTitleWithInlineInputProps : Props {
    var row: Row<UserAlbum>
}

val AlbumTitleWithInlineInput = FC<AlbumTitleWithInlineInputProps> { props ->
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
