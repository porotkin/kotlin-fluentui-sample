// Generated by Karakum - do not modify it manually!


package fluentui

// unhandled import: ARIAButtonSlotProps from "@fluentui/react-aria" 
// unhandled import: ComponentProps from "@fluentui/react-utilities" 
// unhandled import: ComponentState from "@fluentui/react-utilities" 
// unhandled import: ForwardRefComponent from "@fluentui/react-utilities" 
// unhandled import: Slot from "@fluentui/react-utilities" 
// unhandled import: SlotClassNames from "@fluentui/react-utilities" 


sealed external interface CompoundButtonSlots : ButtonSlots {
    /**
     * Second line of text that describes the action this button takes.
     */
    var secondaryContent: Slot

    /**
     * Container that wraps the children and the secondaryContent slot.
     */
    var contentContainer: NonNullable<Slot>
}