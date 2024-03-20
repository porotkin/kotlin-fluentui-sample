package io.github.porotkin.components

import emotion.react.css
import fluentui.*
import fluentui.DialogTriggerAction.Companion.close
import fluentui.Temp49.Companion.subtle
import fluentui.icons.Dismiss24Regular
import io.github.porotkin.entities.AlbumPhoto
import io.github.porotkin.entities.AlbumPhotos
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
import web.cssom.*
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
                            Dialog {
                                DialogTrigger {
                                    disableButtonEnhancement = true

                                    img {
                                        css {
                                            cursor = Cursor.zoomIn
                                        }

                                        src = template.row.original.thumbnailUrl
                                        alt = "preview for ${template.row.original.title}"
                                        draggable = false
                                    }
                                }

                                DialogSurface {
                                    DialogBody {
                                        DialogTitle {
                                            action = DialogTrigger.create {
                                                action = close

                                                Button {
                                                    appearance = subtle
                                                    icon = Dismiss24Regular.create()
                                                }
                                            }

                                            +"Image Viewer"
                                        }
                                        DialogContent {
                                            div {
                                                SlideShow {
                                                    values = it.albumPhotos.toSlideShowValues()
                                                    active = template.row.original.id.toString()
                                                }
                                            }
                                        }
                                    }
                                }
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
                borderSpacing = 0.px
                borderCollapse = BorderCollapse.collapse
                whiteSpace = WhiteSpace.nowrap
                width = 100.pct
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
                                    height = 175.px // Image height + insets
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
