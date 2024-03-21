package io.github.porotkin.components

import fluentui.Button
import fluentui.Temp49.Companion.secondary
import fluentui.icons.ChevronDownRegular
import fluentui.icons.ChevronRightRegular
import react.FC
import react.Props
import react.create
import tanstack.table.core.Row

external interface FoldingControlProps : Props {
    var row: Row<*>
    var getCanExpand: Boolean
}

internal val FoldingControl = FC<FoldingControlProps> { props ->
    if (!props.getCanExpand) {
        return@FC
    }

    Button {
        onClick = { props.row.toggleExpanded(!props.row.getIsExpanded()) }
        icon = if (props.row.getIsExpanded()) ChevronDownRegular.create() else ChevronRightRegular.create()
        appearance = secondary
    }
}
