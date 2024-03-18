// Generated by Karakum - do not modify it manually!


package fluentui

import react.Props


/**
 * SkeletonItem Props
 */

sealed external interface SkeletonItemProps : SkeletonItemSlots, Props {
    /**
     * Sets the animation of the SkeletonItem
     * @default wave
     */
    var animation: (Temp109)?

    /**
     * Sets the appearance of the SkeletonItem
     * @default opaque
     */
    var appearance: (Temp110)?

    /**
     * Sets the size of the SkeletonItem in pixels.
     * Size is restricted to a limited set of values recommended for most uses(see SkeletonItemSize).
     * To set a non-supported size, set `width` and `height` to override the rendered size.
     * @default 16
     */
    var size: SkeletonItemSize?

    /**
     * Sets the shape of the SkeletonItem.
     * @default rectangle
     */
    var shape: (Temp109)?
}
