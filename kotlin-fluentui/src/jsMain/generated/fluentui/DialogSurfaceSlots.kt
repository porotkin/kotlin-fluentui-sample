// Generated by Karakum - do not modify it manually!


package fluentui


sealed external interface DialogSurfaceSlots {
    /**
     * Dimmed background of dialog.
     * The default backdrop is rendered as a `<div>` with styling.
     * This slot expects a `<div>` element which will replace the default backdrop.
     * The backdrop should have `aria-hidden="true"`.
     *
     */
    var backdrop: Slot
    var root: Slot
}
