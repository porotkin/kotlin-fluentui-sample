// Generated by Karakum - do not modify it manually!


package fluentui

// unhandled import: ComponentProps from "@fluentui/react-utilities"
// unhandled import: ComponentState from "@fluentui/react-utilities" 
// unhandled import: ForwardRefComponent from "@fluentui/react-utilities" 
// unhandled import: Label from "@fluentui/react-label" 
// unhandled import: Slot from "@fluentui/react-utilities" 
// unhandled import: SlotClassNames from "@fluentui/react-utilities" 


sealed external interface CheckboxSlots {
    /**
     * The root element of the Checkbox.
     *
     * The root slot receives the `className` and `style` specified directly on the `<Checkbox>`.
     * All other native props will be applied to the primary slot: `input`
     */
    var root: Slot

    /**
     * The Checkbox's label.
     */
    var label: Slot

    /**
     * Hidden input that handles the checkbox's functionality.
     *
     * This is the PRIMARY slot: all native properties specified directly on `<Checkbox>` will be applied to this slot,
     * except `className` and `style`, which remain on the root slot.
     */
    var input: Slot

    /**
     * The checkbox, with the checkmark icon as its child when checked.
     */
    var indicator: Slot
}