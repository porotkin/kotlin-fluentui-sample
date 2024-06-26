package io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable

import emotion.react.css
import fluentui.Skeleton
import fluentui.SkeletonItem
import io.github.porotkin.entities.AlbumPhotos
import io.github.porotkin.entities.UserAlbum
import io.github.porotkin.hooks.useAlbumPhotos
import io.github.porotkin.utils.Insets
import io.github.porotkin.utils.Sizes
import js.array.ReadonlyArray
import js.objects.jso
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.thead
import react.dom.html.ReactHTML.tr
import tanstack.react.table.flexRender
import tanstack.react.table.renderHeader
import tanstack.react.table.useReactTable
import tanstack.table.core.*
import web.cssom.*
import web.cssom.Globals.Companion.inherit
import web.cssom.LineStyle.Companion.solid
import web.cssom.None.Companion.none

external interface UserAlbumsTableProps : Props {
    var userAlbums: ReadonlyArray<UserAlbum>
}

external interface ExtendedUserAlbum : UserAlbum {
    var thumbnailUrl: String
    var url: String
    var albumPhotos: AlbumPhotos
    var expandable: Boolean
}

internal val UserAlbumsTable = FC<UserAlbumsTableProps> {
    val data = useMemo(it.userAlbums) {
        it.userAlbums.toExtendedUserAlbums()
    }
    var expandedState by useState<ExpandedState>(js("{}"))

    val table = useReactTable<ExtendedUserAlbum>(
        options = jso {
            this.data = data
            columns = arrayOf<ColumnDef<ExtendedUserAlbum, String>>(
                jso {
                    id = "foldingControl"
                    header = StringOrTemplateHeader("")
                    cell = ColumnDefTemplate {
                        FoldingControl.create {
                            row = it.row
                            expandable = it.row.original.expandable
                        }
                    }
                },
                jso {
                    id = "id"
                    header = StringOrTemplateHeader("№")
                    accessorFn = { row, _ -> row.id.toString() }
                    cell = ColumnDefTemplate {
                        div.create {
                            +"${if (it.row.original.expandable) "album " else "photo "}${it.row.original.id}"
                        }
                    }
                },
                jso {
                    id = "preview"
                    accessorFn = { row, _ -> row.thumbnailUrl }
                    cell = ColumnDefTemplate {
                        ImagePreview.create {
                            value = it.row.original
                        }
                    }
                },
                jso {
                    id = "title"
                    header = StringOrTemplateHeader("Title")
                    accessorFn = { row, _ -> row.title }
                    cell = ColumnDefTemplate {
                        AlbumTitleWithInlineInput.create {
                            value = it.row.original
                        }
                    }
                },
            )
            getCoreRowModel = getCoreRowModel()
            getExpandedRowModel = getExpandedRowModel()
            getRowCanExpand = { it.original.expandable }
            state = jso {
                expanded = expandedState
            }
            onExpandedChange = { expanded ->
                expandedState = expanded.unsafeCast<ExpandedState>()
            }
        }
    )

    div {
        css {
            overflow = Overflow.scroll
        }

        table {
            css {
                borderSpacing = 0.px
                borderCollapse = BorderCollapse.collapse
                whiteSpace = WhiteSpace.nowrap
                width = 100.pct
                textAlignLast = TextAlignLast.center
                height = inherit
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
                                    position = Position.sticky

                                    lastChild {
                                        borderRight = none
                                    }

                                    firstChild {
                                        width = Sizes.TableColumn.SMALL
                                    }

                                    nthChild("2") {
                                        width = Sizes.TableColumn.MEDIUM
                                    }

                                    nthChild("3") {
                                        width = Sizes.TableColumn.LARGE
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
                        key = row.id
                        for (cell in row.getVisibleCells()) {
                            td {
                                key = cell.column.id
                                css {
                                    padding = Padding(10.px, 12.px)
                                }

                                +flexRender(cell.column.columnDef.cell, cell.getContext())
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
    var row: Row<ExtendedUserAlbum>
}

private val SubTable = FC<SubTableProps> { props ->
    val albumPhotosQueryResult = useAlbumPhotos(props.row.original.id)
    val columnsCount = props.row.getVisibleCells().count()

    if (albumPhotosQueryResult.isLoading) {
        tr {
            td {
                colSpan = columnsCount

                Skeleton {
                    div {
                        css {
                            display = Display.flex
                            flexDirection = FlexDirection.column
                            gap = Insets.Common.SMALL
                        }

                        SkeletonItem {
                            size = Sizes.Skeleton.SMALL
                        }
                        repeat(3) {
                            SkeletonItem {
                                size = Sizes.Skeleton.MEDIUM
                            }
                        }
                    }
                }
            }
        }

        return@FC
    }

    AlbumPhotosSubTable {
        this.albumPhotos = albumPhotosQueryResult.data
        this.row = props.row
    }
}

private fun ReadonlyArray<UserAlbum>.toExtendedUserAlbums(): ReadonlyArray<ExtendedUserAlbum> = this.map {
    jso<ExtendedUserAlbum> {
        id = it.id
        title = it.title
        thumbnailUrl = EMPTY_URL
        url = EMPTY_URL
        albumPhotos = arrayOf()
        expandable = true
    }
}.toTypedArray()

internal val EMPTY_URL = ""
