// Generated by Karakum - do not modify it manually!


package fluentui

// unhandled import: DispatchWithoutAction from "react" 

/**
 * Defines the State object of a component given its slots.
 */

sealed external interface ComponentState<Slots : SlotPropsRecord> {

    @seskar.js.JsNative
    operator fun <Key /* keyof Slots */> get(key: Key): Any?


    @seskar.js.JsNative
    operator fun <Key /* keyof Slots */> set(key: Key, value: Any?)

    var components: Temp0<Slots, Slots, Slots>
}
