// Generated by Karakum - do not modify it manually!


package fluentui


/**
 * State used in rendering DialogSurface
 */

sealed external interface DialogSurfaceState : DialogSurfaceSlots, DialogContextValue {
    /**
     * Transition status for animation.
     * In test environment, this is always `undefined`.
     */
    var transitionStatus: (Temp147)?
}
