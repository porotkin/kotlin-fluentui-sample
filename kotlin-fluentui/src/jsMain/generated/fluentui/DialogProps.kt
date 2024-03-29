// Generated by Karakum - do not modify it manually!


package fluentui

import react.PropsWithChildren


sealed external interface DialogProps : DialogSlots, PropsWithChildren {
    /**
     * Dialog variations.
     *
     * `modal`: When this type of dialog is open, the rest of the page is dimmed out and cannot be interacted with.
     * The tab sequence is kept within the dialog and moving the focus outside
     * the dialog will imply closing it. This is the default type of the component.
     *
     * `non-modal`: When a non-modal dialog is open, the rest of the page is not dimmed out
     * and users can interact with the rest of the page.
     * This also implies that the tab focus can move outside the dialog when it reaches the last focusable element.
     *
     * `alert`: is a special type of modal dialogs that interrupts the user's workflow
     * to communicate an important message or ask for a decision.
     * Unlike a typical modal dialog, the user must take an action through the options given to dismiss the dialog,
     * and it cannot be dismissed through the dimmed background.
     *
     * @default modal
     */
    var modalType: DialogModalType?

    /**
     * Controls the open state of the dialog
     * @default false
     */
    var open: Boolean?

    /**
     * Default value for the uncontrolled open state of the dialog.
     * @default false
     */
    var defaultOpen: Boolean?

    /**
     * Callback fired when the component changes value from open state.
     *
     * @param event - a React's Synthetic event or a KeyboardEvent in case of `documentEscapeKeyDown`
     * @param data - A data object with relevant information,
     * such as open value and type of interaction that created the event
     */
    var onOpenChange: DialogOpenChangeEventHandler?

    /**
     * Enables standard behavior according to the [HTML dialog spec](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)
     * where the focus trap involves setting outside elements inert.
     *
     * @default false
     */
    var inertTrapFocus: Boolean?
}
