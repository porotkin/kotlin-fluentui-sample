package io.github.porotkin.routes.CurrentUserPage.UserAlbumsTable

import emotion.react.css
import fluentui.*
import fluentui.icons.Dismiss24Regular
import react.FC
import react.Fragment
import react.Props
import react.create
import react.dom.html.ReactHTML
import web.cssom.Cursor

external interface ImagePreviewProps : Props {
    var value: ExtendedUserAlbum
}

internal val ImagePreview = FC<ImagePreviewProps> { props ->
    if (props.value.thumbnailUrl == EMPTY_URL) {
        Fragment()

        return@FC
    }

    Fragment {
        Dialog {
            DialogTrigger {
                disableButtonEnhancement = true

                ReactHTML.img {
                    css {
                        cursor = Cursor.zoomIn
                    }

                    src = props.value.thumbnailUrl
                    alt = "preview for ${props.value.title}"
                    draggable = false
                }
            }

            DialogSurface {
                DialogBody {
                    DialogTitle {
                        action = DialogTrigger.create {
                            action = DialogTriggerAction.close

                            Button {
                                appearance = Temp49.subtle
                                icon = Dismiss24Regular.create()
                            }
                        }

                        +"Image Viewer"
                    }
                    DialogContent {
                        ReactHTML.div {
                            SlideShow {
                                values = props.value.albumPhotos.toSlideShowValues()
                                active = props.value.id.toString()
                            }
                        }
                    }
                }
            }
        }
    }
}
