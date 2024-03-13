// Generated by Karakum - do not modify it manually!

@file:JsModule("@fluentui/react-components")

package fluentui

import react.FC
import react.Provider
import react.Ref
import web.html.HTMLDivElement
import web.html.HTMLElement
import web.html.HTMLLIElement

external val FluentProvider: FC<FluentProviderProps>

external val Breadcrumb: FC<BreadcrumbProps>

/**
 * A button component which is used inside the Breadcrumb.
 */
external val BreadcrumbButton: FC<BreadcrumbButtonProps>

/**
 * Static CSS class names used internally for the component slots.
 */
external val breadcrumbButtonClassNames: SlotClassNames<BreadcrumbButtonSlots>

external val breadcrumbClassNames: SlotClassNames<BreadcrumbSlots>

/**
 * A divider component which is used inside the Breadcrumb
 */
external val BreadcrumbDivider: FC<BreadcrumbDividerProps>

external val breadcrumbDividerClassNames: SlotClassNames<BreadcrumbDividerSlots>

/**
 * BreadcrumbItem component is a wrapper for BreadcrumbLink and BreadcrumbButton.
 * It can be used as a non-interactive item.
 */
external val BreadcrumbItem: FC<BreadcrumbItemProps>

external val breadcrumbItemClassNames: SlotClassNames<BreadcrumbItemSlots>

/**
 * @internal
 */
external val BreadcrumbProvider: Provider<Required<BreadcrumbProps>?>

external val isTruncatableBreadcrumbContent: (content: String, maxLength: Double) -> Boolean

/**
 * Get the displayed items and overflowing items based on the array of BreadcrumbItems needed for Breadcrumb.
 *
 * @param options - Configure the partition options
 *
 * @returns Three arrays split into displayed items and overflow items based on maxDisplayedItems.
 */
external val partitionBreadcrumbItems: Function<Any?> /* <T>(options: PartitionBreadcrumbItemsOptions<T>) => PartitionBreadcrumbItems<T> */

external val truncateBreadcrumbLongName: (content: String, maxLength: Double? /* use undefined for default */) -> String

external val truncateBreadcrumLongTooltip: (content: String, maxLength: Double? /* use undefined for default */) -> String

/**
 * Apply styling to the BreadcrumbButton slots based on the state
 */
external val useBreadcrumbButtonStyles_unstable: (state: BreadcrumbButtonState) -> BreadcrumbButtonState

/**
 * @internal
 */
external val useBreadcrumbContext_unstable: () -> Required<BreadcrumbProps>

/**
 * Create the state required to render BreadcrumbDivider.
 *
 * The returned state can be modified with hooks such as useBreadcrumbDividerStyles_unstable,
 * before being passed to renderBreadcrumbDivider_unstable.
 *
 * @param props - props from this instance of BreadcrumbDivider
 * @param ref - reference to root HTMLElement of BreadcrumbDivider
 */
external val useBreadcrumbDivider_unstable: (props: BreadcrumbDividerProps, ref: Ref<HTMLLIElement>) -> BreadcrumbDividerState

/**
 * Apply styling to the BreadcrumbDivider slots based on the state
 */
external val useBreadcrumbDividerStyles_unstable: (state: BreadcrumbDividerState) -> BreadcrumbDividerState

/**
 * Create the state required to render BreadcrumbItem.
 *
 * The returned state can be modified with hooks such as useBreadcrumbItemStyles_unstable,
 * before being passed to renderBreadcrumbItem_unstable.
 *
 * @param props - props from this instance of BreadcrumbItem
 * @param ref - reference to root HTMLElement of BreadcrumbItem
 */
external val useBreadcrumbItem_unstable: (props: BreadcrumbItemProps, ref: Ref<HTMLLIElement>) -> BreadcrumbItemState

/**
 * Apply styling to the BreadcrumbItem slots based on the state
 */
external val useBreadcrumbItemStyles_unstable: (state: BreadcrumbItemState) -> BreadcrumbItemState

/**
 * Apply styling to the Breadcrumb slots based on the state
 */
external val useBreadcrumbStyles_unstable: (state: BreadcrumbState) -> BreadcrumbState

/* export {}; */


/**
 * A card provides scaffolding for hosting actions and content for a single topic.
 */
external val Card: ForwardRefComponent<CardProps>

/**
 * Static CSS class names used internally for the component slots.
 */
external val cardClassNames: SlotClassNames<CardSlots>

/**
 * CSS variable names used internally for uniform styling in Card.
 */
external val cardCSSVars: CardCSSVars

/**
 * Component to render Button actions in a Card component.
 */
external val CardFooter: ForwardRefComponent<CardFooterProps>

/**
 * Static CSS class names used internally for the component slots.
 */
external val cardFooterClassNames: SlotClassNames<CardFooterSlots>

/**
 * Component to render an image, text and an action in a Card component.
 */
external val CardHeader: ForwardRefComponent<CardHeaderProps>

/**
 * Static CSS class names used internally for the component slots.
 */
external val cardHeaderClassNames: SlotClassNames<CardHeaderSlots>

/**
 * CSS variable names used internally for uniform styling in CardHeader.
 */
external val cardHeaderCSSVars: CardHeaderCSSVars

/**
 * Component to render image previews of documents or articles in a Card component.
 */
external val CardPreview: ForwardRefComponent<CardPreviewProps>

/**
 * Static CSS class names used internally for the component slots.
 */
external val cardPreviewClassNames: SlotClassNames<CardPreviewSlots>

/**
 * @internal
 */
external val CardProvider: Provider<CardContextValue?>

/**
 * Text preset component for the Body1 typography variant
 */
external val Body1: FC<TextPresetProps>

external val body1ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Body1Strong typography variant
 */
external val Body1Strong: FC<TextPresetProps>

external val body1StrongClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Body1Stronger typography variant
 */
external val Body1Stronger: FC<TextPresetProps>

external val body1StrongerClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Body2 typography variant
 */
external val Body2: FC<TextPresetProps>

external val body2ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Caption1 typography variant
 */
external val Caption1: FC<TextPresetProps>

external val caption1ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Caption1Strong typography variant
 */
external val Caption1Strong: FC<TextPresetProps>

external val caption1StrongClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Caption1Stronger typography variant
 */
external val Caption1Stronger: FC<TextPresetProps>

external val caption1StrongerClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Caption2 typography variant
 */
external val Caption2: FC<TextPresetProps>

external val caption2ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Caption2Strong typography variant
 */
external val Caption2Strong: FC<TextPresetProps>

external val caption2StrongClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Display typography variant
 */
external val Display: FC<TextPresetProps>

external val displayClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Large Title typography variant
 */
external val LargeTitle: FC<TextPresetProps>

external val largeTitleClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Subtitle1 typography variant
 */
external val Subtitle1: FC<TextPresetProps>

external val subtitle1ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Subtitle2 typography variant
 */
external val Subtitle2: FC<TextPresetProps>

external val subtitle2ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Subtitle2Stronger typography variant
 */
external val Subtitle2Stronger: FC<TextPresetProps>

external val subtitle2StrongerClassNames: SlotClassNames<TextSlots>

/**
 * Typography and styling abstraction component used to ensure consistency of text.
 */
external val Text_2: ForwardRefComponent<TextProps>

/* export { Text_2 as Text }; */

external val textClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Title 1 typography variant
 */
external val Title1: FC<TextPresetProps>

external val title1ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Title 2 typography variant
 */
external val Title2: FC<TextPresetProps>

external val title2ClassNames: SlotClassNames<TextSlots>

/**
 * Text preset component for the Title 3 typography variant
 */
external val Title3: FC<TextPresetProps>

external val title3ClassNames: SlotClassNames<TextSlots>

/**
 * Create the state required to render Text.
 *
 * The returned state can be modified with hooks such as useTextStyles_unstable,
 * before being passed to renderText_unstable.
 *
 * @param props - props from this instance of Text
 * @param ref - reference to root HTMLElement of Text
 */
external val useText_unstable: (props: TextProps, ref: Ref<HTMLElement>) -> TextState

/**
 * Apply styling to the Text slots based on the state
 */
external val useTextStyles_unstable: (state: TextState) -> TextState

/**
 * Drawer contains supplementary content and are used for complex creation, edit, or management experiences.
 */
external val Drawer: ForwardRefComponent<DrawerProps>

/**
 * DrawerBody provides with a container for the main content of a Drawer.
 */
external val DrawerBody: FC<DrawerBodyProps>

external val drawerBodyClassNames: SlotClassNames<DrawerBodySlots>

/**
 * DrawerFooter provides a structured footer for the drawer component.
 */
external val DrawerFooter: ForwardRefComponent<DrawerFooterProps>

external val drawerFooterClassNames: SlotClassNames<DrawerFooterSlots>

/**
 * DrawerHeader provides a structured header for the drawer component.
 */
external val DrawerHeader: FC<DrawerHeaderProps>

external val drawerHeaderClassNames: SlotClassNames<DrawerHeaderSlots>

/**
 * DrawerHeaderNavigation provides a header navigation area for the Drawer.
 */
external val DrawerHeaderNavigation: ForwardRefComponent<DrawerHeaderNavigationProps>

external val drawerHeaderNavigationClassNames: SlotClassNames<DrawerHeaderNavigationSlots>

/**
 * DrawerHeader provides a structured header for the drawer component.
 */
external val DrawerHeaderTitle: FC<DrawerHeaderTitleProps>

external val drawerHeaderTitleClassNames: SlotClassNames<DrawerHeaderTitleSlots>

/**
 * InlineDrawer is often used for navigation that is not dismissible. As it is on the same level as
 * the main surface, users can still interact with other UI elements.
 */
external val InlineDrawer: FC<InlineDrawerProps>

external val inlineDrawerClassNames: SlotClassNames<InlineDrawerSlots>

/**
 * OverlayDrawer contains supplementary content and are used for complex creation, edit, or management experiences.
 */
external val OverlayDrawer: ForwardRefComponent<OverlayDrawerProps>

external val overlayDrawerClassNames: SlotClassNames<OverlayDrawerSurfaceSlots>

/**
 * Create the state required to render Drawer.
 *
 * The returned state can be modified with hooks such as useDrawerStyles_unstable,
 * before being passed to renderDrawer_unstable.
 *
 * @param props - props from this instance of Drawer
 * @param ref - reference to root HTMLElement of Drawer
 */
external val useDrawer_unstable: (props: DrawerProps, ref: Ref<HTMLElement>) -> DrawerState

/**
 * Create the state required to render DrawerBody.
 *
 * The returned state can be modified with hooks such as useDrawerBodyStyles_unstable,
 * before being passed to renderDrawerBody_unstable.
 *
 * @param props - props from this instance of DrawerBody
 * @param ref - reference to root HTMLElement of DrawerBody
 */
external val useDrawerBody_unstable: (props: DrawerBodyProps, ref: Ref<HTMLElement>) -> DrawerBodyState

/**
 * Apply styling to the DrawerBody slots based on the state
 */
external val useDrawerBodyStyles_unstable: (state: DrawerBodyState) -> DrawerBodyState

/**
 * Create the state required to render DrawerFooter.
 *
 * The returned state can be modified with hooks such as useDrawerFooterStyles_unstable,
 * before being passed to renderDrawerFooter_unstable.
 *
 * @param props - props from this instance of DrawerFooter
 * @param ref - reference to root HTMLElement of DrawerFooter
 */
external val useDrawerFooter_unstable: (props: DrawerFooterProps, ref: Ref<HTMLElement>) -> DrawerFooterState

/**
 * Apply styling to the DrawerFooter slots based on the state
 */
external val useDrawerFooterStyles_unstable: (state: DrawerFooterState) -> DrawerFooterState

/**
 * Create the state required to render DrawerHeader.
 *
 * The returned state can be modified with hooks such as useDrawerHeaderStyles_unstable,
 * before being passed to renderDrawerHeader_unstable.
 *
 * @param props - props from this instance of DrawerHeader
 * @param ref - reference to root HTMLElement of DrawerHeader
 */
external val useDrawerHeader_unstable: (props: DrawerHeaderProps, ref: Ref<HTMLElement>) -> DrawerHeaderState

/**
 * Create the state required to render DrawerHeaderNavigation.
 *
 * The returned state can be modified with hooks such as useDrawerHeaderNavigationStyles_unstable,
 * before being passed to renderDrawerHeaderNavigation_unstable.
 *
 * @param props - props from this instance of DrawerHeaderNavigation
 * @param ref - reference to root HTMLElement of DrawerHeaderNavigation
 */
external val useDrawerHeaderNavigation_unstable: (props: DrawerHeaderNavigationProps, ref: Ref<HTMLElement>) -> DrawerHeaderNavigationState

/**
 * Apply styling to the DrawerHeaderNavigation slots based on the state
 */
external val useDrawerHeaderNavigationStyles_unstable: (state: DrawerHeaderNavigationState) -> DrawerHeaderNavigationState

/**
 * Apply styling to the DrawerHeader slots based on the state
 */
external val useDrawerHeaderStyles_unstable: (state: DrawerHeaderState) -> DrawerHeaderState

/**
 * Create the state required to render DrawerHeaderTitle.
 *
 * The returned state can be modified with hooks such as useDrawerHeaderTitleStyles_unstable,
 * before being passed to renderDrawerHeaderTitle_unstable.
 *
 * @param props - props from this instance of DrawerHeaderTitle
 * @param ref - reference to root HTMLElement of DrawerHeaderTitle
 */
external val useDrawerHeaderTitle_unstable: (props: DrawerHeaderTitleProps, ref: Ref<HTMLDivElement>) -> DrawerHeaderTitleState

/**
 * Apply styling to the DrawerHeaderTitle slots based on the state
 */
external val useDrawerHeaderTitleStyles_unstable: (state: DrawerHeaderTitleState) -> DrawerHeaderTitleState

/**
 * Apply styling to the Drawer slots based on the state
 */
external val useDrawerStyles_unstable: (state: DrawerState) -> DrawerState

/**
 * Create the state required to render InlineDrawer.
 *
 * The returned state can be modified with hooks such as useInlineDrawerStyles_unstable,
 * before being passed to renderInlineDrawer_unstable.
 *
 * @param props - props from this instance of InlineDrawer
 * @param ref - reference to root HTMLElement of InlineDrawer
 */
external val useInlineDrawer_unstable: (props: InlineDrawerProps, ref: Ref<HTMLDivElement>) -> InlineDrawerState

/**
 * Apply styling to the InlineDrawer slots based on the state
 */
external val useInlineDrawerStyles_unstable: (state: InlineDrawerState) -> InlineDrawerState

/**
 * Create the state required to render OverlayDrawer.
 *
 * The returned state can be modified with hooks such as useOverlayDrawerStyles_unstable,
 * before being passed to renderOverlayDrawer_unstable.
 *
 * @param props - props from this instance of OverlayDrawer
 * @param ref - reference to root HTMLDivElement of OverlayDrawer
 */
external val useOverlayDrawer_unstable: (props: OverlayDrawerProps, ref: Ref<HTMLDivElement>) -> OverlayDrawerState

/**
 * Apply styling to the OverlayDrawer slots based on the state
 */
external val useOverlayDrawerStyles_unstable: (state: OverlayDrawerState) -> OverlayDrawerState

/**
 * Buttons give people a way to trigger an action.
 */
external val Button: FC<ButtonProps>

external val buttonClassNames: SlotClassNames<ButtonSlots>

/**
 * @internal
 * Internal context provider used to update default values between internal components
 */
external val ButtonContextProvider: Provider<ButtonContextValue?>

/**
 * CompoundButtons are buttons that can have secondary content that adds extra information to the user.
 */
external val CompoundButton: ForwardRefComponent<CompoundButtonProps>

external val compoundButtonClassNames: SlotClassNames<CompoundButtonSlots>

/**
 * MenuButtons are buttons that have a chevron icon after the button contents and are usually clicked to open/close
 * menus.
 */
external val MenuButton: ForwardRefComponent<MenuButtonProps>

external val menuButtonClassNames: SlotClassNames<MenuButtonSlots>

/**
 * SplitButtons are a grouping of two interactive surfaces where interacting with the first one triggers a primary
 * action, while interacting with the second one opens a menu with secondary actions.
 */
external val SplitButton: ForwardRefComponent<SplitButtonProps>

external val splitButtonClassNames: SlotClassNames<SplitButtonSlots>

/**
 * ToggleButtons are buttons that toggle between two defined states when triggered.
 */
external val ToggleButton: ForwardRefComponent<ToggleButtonProps>

external val toggleButtonClassNames: SlotClassNames<ButtonSlots>

/**
 * Given user props, defines default props for the Button, calls useButtonState, and returns processed state.
 * @param props - User provided props to the Button component.
 * @param ref - User provided ref to be passed to the Button component.
 */
external val useButton_unstable: (props: ButtonProps, ref: Ref<Any /* HTMLButtonElement | HTMLAnchorElement */>) -> ButtonState

/**
 * @internal
 * Internal context hook used to update default values between internal components
 */
external val useButtonContext: () -> ButtonContextValue

external val useButtonStyles_unstable: (state: ButtonState) -> ButtonState

/**
 * Given user props, defines default props for the CompoundButton, calls useButtonState, and returns processed state.
 * @param props - User provided props to the CompoundButton component.
 * @param ref - User provided ref to be passed to the CompoundButton component.
 */
external val useCompoundButton_unstable: (options: CompoundButtonProps, ref: Ref<Any /* HTMLButtonElement | HTMLAnchorElement */>) -> CompoundButtonState

external val useCompoundButtonStyles_unstable: (state: CompoundButtonState) -> CompoundButtonState

/**
 * Given user props, returns the final state for a MenuButton.
 */
external val useMenuButton_unstable: (options: MenuButtonProps, ref: Ref<Any /* HTMLButtonElement | HTMLAnchorElement */>) -> MenuButtonState

external val useMenuButtonStyles_unstable: (state: MenuButtonState) -> MenuButtonState

/**
 * Given user props, defines default props for the SplitButton and returns processed state.
 * @param props - User provided props to the SplitButton component.
 * @param ref - User provided ref to be passed to the SplitButton component.
 */
external val useSplitButton_unstable: (props: SplitButtonProps, ref: Ref<Any /* HTMLButtonElement | HTMLAnchorElement */>) -> SplitButtonState

external val useSplitButtonStyles_unstable: (state: SplitButtonState) -> SplitButtonState

/**
 * Given user props, defines default props for the ToggleButton, calls useButtonState and useChecked, and returns
 * processed state.
 * @param props - User provided props to the ToggleButton component.
 * @param ref - User provided ref to be passed to the ToggleButton component.
 */
external val useToggleButton_unstable: (props: ToggleButtonProps, ref: Ref<Any /* HTMLButtonElement | HTMLAnchorElement */>) -> ToggleButtonState

external val useToggleButtonStyles_unstable: (state: ToggleButtonState) -> ToggleButtonState
