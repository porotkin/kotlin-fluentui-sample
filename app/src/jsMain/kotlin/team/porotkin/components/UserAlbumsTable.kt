package team.porotkin.components

import emotion.react.css
import fluentui.Skeleton
import fluentui.SkeletonItem
import js.array.ReadonlyArray
import js.objects.jso
import react.FC
import react.Props
import react.create
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.thead
import react.dom.html.ReactHTML.tr
import tanstack.react.table.renderCell
import tanstack.react.table.renderHeader
import tanstack.react.table.useReactTable
import tanstack.table.core.*
import team.porotkin.entities.UserAlbum
import team.porotkin.hooks.useAlbumPhotos
import team.porotkin.utils.Insets
import web.cssom.*
import web.cssom.Auto.Companion.auto
import web.cssom.LineStyle.Companion.solid
import web.cssom.None.Companion.none

external interface UserAlbumsTableProps : Props {
    var userAlbums: ReadonlyArray<UserAlbum>
}

val UserAlbumsTable = FC<UserAlbumsTableProps> {
    val table = useReactTable<UserAlbum>(
        options = jso {
            data = it.userAlbums
            columns = arrayOf<ColumnDef<UserAlbum, String>>(
                jso {
                    id = "foldingControl"
                    header = StringOrTemplateHeader("")
                    cell = ColumnDefTemplate { FoldingControl.create { row = it.row } }
                },
                jso {
                    id = "albumId"
                    header = StringOrTemplateHeader("№")
                    accessorFn = { row, _ -> row.id.toString() }
                },
                jso {
                    id = "title"
                    header = StringOrTemplateHeader("Album Title")
                    accessorFn = { row, _ -> row.title }
                },
            )
            getCoreRowModel = getCoreRowModel()
            getExpandedRowModel = getExpandedRowModel()
            getRowCanExpand = { true }
        }
    )

    div {
        table {
            css {
                width = 400.px
                borderSpacing = 0.px
                borderCollapse = BorderCollapse.collapse
                whiteSpace = WhiteSpace.nowrap
                margin = auto
            }

            thead {
                for (headerGroup in table.getHeaderGroups()) {
                    tr {
                        for (header in headerGroup.headers) {
                            th {
                                css {
                                    fontWeight = FontWeight.normal
                                    padding = Padding(4.px, 12.px)
                                    borderRight = Border(1.px, solid, NamedColor.gray)
                                    borderBottom = Border(1.px, solid, NamedColor.gray)

                                    lastChild {
                                        borderRight = none
                                    }
                                }

                                +renderHeader(header)
                            }
                        }
                    }
                }
            }

            tbody {
                css {
                    color = NamedColor.black
                    backgroundColor = NamedColor.white
                    textAlign = TextAlign.start
                }

                for (row in table.getRowModel().rows) {
                    tr {
                        for (cell in row.getVisibleCells()) {
                            td {
                                css {
                                    padding = Padding(10.px, 12.px)
                                }

                                +renderCell(cell)
                            }
                        }

                    }

                    if (row.getIsExpanded()) {
                        SubTable {
                            this.row = row
                        }
                    }
                }
            }
        }
    }
}

external interface SubTableProps : Props {
    var row: Row<UserAlbum>
}

val SubTable = FC<SubTableProps> {
    val albumPhotosQueryResult = useAlbumPhotos(it.row.original.id)

    if (albumPhotosQueryResult.isLoading) {
        return@FC tr {
            td {
                colSpan = 3

                Skeleton {
                    div {
                        style = jso {
                            display = Display.flex
                            flexDirection = FlexDirection.column
                            gap = Insets.Common.SMALL
                        }

                        SkeletonItem {
                            size = 24
                        }
                        SkeletonItem {
                            size = 48
                        }
                        SkeletonItem {
                            size = 48
                        }
                        SkeletonItem {
                            size = 48
                        }
                    }
                }
            }
        }
    }

    tr {
        td {
            css {
                padding = Padding(10.px, 12.px)
            }
            colSpan = 3

            AlbumPhotosSubTable {
                this.albumPhotos = albumPhotosQueryResult.data
            }
        }
    }

}


