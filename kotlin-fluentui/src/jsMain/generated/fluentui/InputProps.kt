// Generated by Karakum - do not modify it manually!


package fluentui

import react.Props
import web.events.EventHandler
import web.html.HTMLInputElement
import web.uievents.InputEvent


sealed external interface InputProps : InputSlots, Props {
    /** Input can't have children. */
    var children: Nothing?

    /**
     * Size of the input (changes the font size and spacing).
     * @default 'medium'
     */
    var size: (Temp143)?

    /**
     * Controls the colors and borders of the input.
     * @default 'outline'
     *
     * Note: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future.
     */
    var appearance: (Temp144)?

    /**
     * Default value of the input. Provide this if the input should be an uncontrolled component
     * which tracks its current state internally; otherwise, use `value`.
     *
     * (This prop is mutually exclusive with `value`.)
     */
    var defaultValue: String?

    /**
     * Current value of the input. Provide this if the input is a controlled component where you
     * are maintaining its current state; otherwise, use `defaultValue`.
     *
     * (This prop is mutually exclusive with `defaultValue`.)
     */
    var value: String?

    /**
     * Called when the user changes the input's value.
     */
    var onChange: EventHandler<InputEvent, HTMLInputElement>?

    /**
     * An input can have different text-based [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types)
     * based on the type of value the user will enter.
     *
     * Note that no custom styling is currently applied for alternative types, and some types may
     * activate browser-default styling which does not match the Fluent design language.
     *
     * (For non-text-based types such as `button` or `checkbox`, use the appropriate component or an
     * `<input>` element instead.)
     * @default 'text'
     */
    var type: (Temp145)?
}
