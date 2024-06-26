// Generated by Karakum - do not modify it manually!


package fluentui

import react.PropsWithChildren
import react.PropsWithClassName
import web.events.EventHandler

// unhandled import: ARIAButtonSlotProps from "@fluentui/react-aria" 
// unhandled import: ComponentProps from "@fluentui/react-utilities" 
// unhandled import: ComponentState from "@fluentui/react-utilities" 
// unhandled import: ForwardRefComponent from "@fluentui/react-utilities" 
// unhandled import: Slot from "@fluentui/react-utilities" 
// unhandled import: SlotClassNames from "@fluentui/react-utilities" 


sealed external interface ButtonProps : ButtonSlots, PropsWithChildren, PropsWithClassName {
    var onClick: EventHandler<*, *>

    /**
     * A button can have its content and borders styled for greater emphasis or to be subtle.
     * - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
     * - 'primary': Emphasizes the button as a primary action.
     * - 'outline': Removes background styling.
     * - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
     * - 'transparent': Removes background and border styling.
     *
     * @default 'secondary'
     */
    var appearance: (Temp49)?

    /**
     * When set, allows the button to be focusable even when it has been disabled. This is used in scenarios where it
     * is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this
     * pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.
     *
     * @default false
     */
    var disabledFocusable: Boolean?

    /**
     * A button can show that it cannot be interacted with.
     *
     * @default false
     */
    var disabled: Boolean?

    /**
     * A button can format its icon to appear before or after its content.
     *
     * @default 'before'
     */
    var iconPosition: (Temp50)?

    /**
     * A button can be rounded, circular, or square.
     *
     * @default 'rounded'
     */
    var shape: (Temp51)?

    /**
     * A button supports different sizes.
     *
     * @default 'medium'
     */
    var size: ButtonSize?
}
