package team.porotkin.components

import emotion.react.css
import js.objects.jso
import react.FC
import react.Fragment
import react.Props
import react.create
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.thead
import react.dom.html.ReactHTML.tr
import tanstack.react.table.renderCell
import tanstack.react.table.renderHeader
import tanstack.react.table.useReactTable
import tanstack.table.core.ColumnDef
import tanstack.table.core.ColumnDefTemplate
import tanstack.table.core.StringOrTemplateHeader
import tanstack.table.core.getCoreRowModel
import team.porotkin.entities.AlbumPhoto
import team.porotkin.entities.AlbumPhotos
import web.cssom.*
import web.cssom.Auto.Companion.auto
import web.cssom.LineStyle.Companion.solid
import web.cssom.None.Companion.none

external interface AlbumPhotosSubTableProps : Props {
    var albumPhotos: AlbumPhotos
}

val AlbumPhotosSubTable = FC<AlbumPhotosSubTableProps> {
    val table = useReactTable<AlbumPhoto>(
        options = jso {
            data = it.albumPhotos
            columns = arrayOf<ColumnDef<AlbumPhoto, String>>(
                jso {
                    id = "id"
                    header = StringOrTemplateHeader("№")
                    accessorFn = { row, _ -> row.id.toString() }
                },
                jso {
                    id = "preview"
                    header = StringOrTemplateHeader("Preview")
                    accessorFn = { row, _ -> row.thumbnailUrl }
                    cell = ColumnDefTemplate { template ->
                        Fragment.create {
                            img {
                                src = template.row.original.thumbnailUrl
                                alt = "preview for ${template.row.original.title}"
                                draggable = false
                            }
                            SlideShow {
                                values = it.albumPhotos.map {
                                    val value = jso<Image> {
                                        src = it.url
                                        alt = "preview for $${it.title}"
                                    }

                                    return@map value
                                }.toTypedArray()
                            }
                        }
                    }
                },
                jso {
                    id = "title"
                    header = StringOrTemplateHeader("Photo Title")
                    accessorFn = { row, _ -> row.title }
                },
            )
            getCoreRowModel = getCoreRowModel()
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
                }
            }
        }
    }
}


