package team.porotkin.components

import fluentui.Button
import react.FC
import react.Props
import tanstack.table.core.Row

external interface FoldingControlProps : Props {
    var row: Row<*>
}

val FoldingControl = FC<FoldingControlProps> { props ->
    if (!props.row.getCanExpand()) {
        return@FC
    }

    Button {
        onClick = { props.row.toggleExpanded(!props.row.getIsExpanded()) }

        +if (props.row.getIsExpanded()) "Collapse" else "Expand"
    }
}
