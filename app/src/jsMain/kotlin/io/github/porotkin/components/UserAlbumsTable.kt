package io.github.porotkin.components

import emotion.react.css
import fluentui.Skeleton
import fluentui.SkeletonItem
import io.github.porotkin.entities.UserAlbum
import io.github.porotkin.hooks.useAlbumPhotos
import io.github.porotkin.utils.Insets
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
import web.cssom.*
import web.cssom.LineStyle.Companion.solid
import web.cssom.None.Companion.none

external interface UserAlbumsTableProps : Props {
    var userAlbums: ReadonlyArray<UserAlbum>
}

internal val UserAlbumsTable = FC<UserAlbumsTableProps> {
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
                    cell = ColumnDefTemplate { AlbumTitleWithInlineInput.create { row = it.row } }
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
                borderSpacing = 0.px
                borderCollapse = BorderCollapse.collapse
                whiteSpace = WhiteSpace.nowrap
                width = 100.pct
                textAlignLast = TextAlignLast.center
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

private val SubTable = FC<SubTableProps> {
    val albumPhotosQueryResult = useAlbumPhotos(it.row.original.id)

    if (albumPhotosQueryResult.isLoading) {
        return@FC tr {
            td {
                colSpan = 3

                Skeleton {
                    div {
                        css {
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


