import {
	ScrollArea as BaseScrollArea,
	type ScrollAreaRootProps as BaseScrollAreaRootProps,
} from '@base-ui/react/scroll-area'

import { cvx } from '../../utils/class-names'
import { type ComponentProps } from '../../utils/types'

export type ScrollAreaProps = ComponentProps<
	'div',
	BaseScrollAreaRootProps & {
		/**
		 * Axes the content can be scrolled along
		 * @default 'vertical'
		 */
		orientation?: 'vertical' | 'horizontal' | 'both'
	},
	'style'
>

/**
 * Scroll Area Component
 * @description
 * Scrollable container with a custom scrollbar built on Base UI `ScrollArea`
 * Fills its parent, so give the parent a fixed size (or `max-height`/`max-width` with the
 * content constrained) to make the content overflow
 * The viewport is focusable while it can scroll, so it is reachable with the keyboard
 * @example
 * ```tsx
 *   <div className="h-72 w-48">
 *     <ScrollArea>
 *       <p>Long content</p>
 *     </ScrollArea>
 *   </div>
 * ```
 * @example
 * ```tsx
 *   <div className="w-72">
 *     <ScrollArea orientation="horizontal">
 *       <div className="flex w-max gap-2">...</div>
 *     </ScrollArea>
 *   </div>
 * ```
 */
export function ScrollArea({
	orientation = 'vertical',
	children,
	className,
	...props
}: ScrollAreaProps) {
	return (
		<BaseScrollArea.Root data-slot="scroll-area" className={scrollArea({ className })} {...props}>
			<BaseScrollArea.Viewport data-slot="scroll-area:viewport" className={viewport()}>
				<BaseScrollArea.Content>{children}</BaseScrollArea.Content>
			</BaseScrollArea.Viewport>
			{orientation !== 'horizontal' && <Scrollbar orientation="vertical" />}
			{orientation !== 'vertical' && <Scrollbar orientation="horizontal" />}
			{orientation === 'both' && <BaseScrollArea.Corner data-slot="scroll-area:corner" />}
		</BaseScrollArea.Root>
	)
}

const scrollArea = cvx(['relative size-full'])

const viewport = cvx([
	'size-full overscroll-contain outline-none',
	'focus-visible:ring-2 focus-visible:ring-ring/50',
])

function Scrollbar({ orientation }: { orientation: 'vertical' | 'horizontal' }) {
	return (
		<BaseScrollArea.Scrollbar
			data-slot="scroll-area:scrollbar"
			orientation={orientation}
			className={scrollbar()}
		>
			<BaseScrollArea.Thumb data-slot="scroll-area:thumb" className={thumb()} />
		</BaseScrollArea.Scrollbar>
	)
}

const scrollbar = cvx([
	'pointer-events-none flex touch-none p-0.5 opacity-0 transition-opacity duration-150 select-none',
	'data-hovering:pointer-events-auto data-hovering:opacity-100',
	'data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0',
	'data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:justify-center',
	'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:items-center',
])

// Base UI sizes the thumb along the scroll axis, the cross axis is filled here
const thumb = cvx([
	'rounded-full bg-muted-foreground/50 hover:backdrop-blur-xs ring-1 ring-transparent hover:ring-muted-foreground/50 transition-[shadow,backdrop-filter]',
	'data-[orientation=vertical]:w-full data-[orientation=horizontal]:h-full',
])
