// Generated by Karakum - do not modify it manually!


package fluentui

// unhandled import: DispatchWithoutAction from "react" 

/**
 * The props type and shorthand value for a slot. Type is either a single intrinsic element like `'div'`,
 * or a component like `typeof Button`.
 *
 * If a slot needs to support multiple intrinsic element types, use the `AlternateAs` param (see examples below).
 *
 * By default, slots can be set to `null` to prevent them from being rendered. If a slot must always be rendered,
 * wrap with `NonNullable` (see examples below).
 *
 * @example
 * ```
 * // Intrinsic element examples:
 * Slot<'div'> // Slot is always div
 * Slot<'button', 'a'> // Defaults to button, but allows as="a" with anchor-specific props
 * Slot<'span', 'div' | 'pre'> // Defaults to span, but allows as="div" or as="pre"
 * NonNullable<Slot<'div'>> // Slot that will always be rendered (can't be set to null by the user)
 *
 * // Component examples:
 * Slot<typeof Button> // Slot is always a Button, and accepts all of Button's Props
 * NonNullable<Slot<typeof Label>> // Slot is a Label and will always be rendered (can't be set to null by the user)
 * ```
 */
typealias Slot = Any? /* IsSingleton<Extract<Type, string>> extends true ? WithSlotShorthandValue<Type extends keyof JSX.IntrinsicElements ? {
    as?: Type;
} & WithSlotRenderFunction<IntrinsicElementProps<Type>> : Type extends React_2.ComponentType<infer Props> ? WithSlotRenderFunction<Props> : Type> | {
    [As in AlternateAs]: {
        as: As;
    } & WithSlotRenderFunction<IntrinsicElementProps<As>>;
}[AlternateAs] | null : 'Error: First parameter to Slot must not be not a union of types. See documentation of Slot type.' */
