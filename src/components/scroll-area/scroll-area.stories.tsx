import { type StoryDefault } from '@ladle/react'

import { ScrollArea, type ScrollAreaProps } from './scroll-area'

export default {
	args: {
		orientation: 'vertical',
	},
	argTypes: {
		orientation: {
			control: { type: 'radio' },
			options: ['vertical', 'horizontal', 'both'],
		},
	},
} satisfies StoryDefault<ScrollAreaProps>

const items = Array.from({ length: 30 }, (_value, index) => `Item ${index + 1}`)

export function Default(props: ScrollAreaProps) {
	return (
		<ScrollArea className="h-56 w-72 rounded border border-neutral-300 bg-white" {...props}>
			<ul className="flex flex-col gap-1 p-3 text-sm">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</ScrollArea>
	)
}

export function Horizontal(props: ScrollAreaProps) {
	return (
		<ScrollArea
			className="h-56 w-72 rounded border border-neutral-300 bg-white"
			{...props}
			orientation="horizontal"
		>
			<ul className="flex w-max gap-2 p-3 text-sm">
				{items.map((item) => (
					<li key={item} className="rounded-lg border border-neutral-300 px-3 py-1.5">
						{item}
					</li>
				))}
			</ul>
		</ScrollArea>
	)
}

export function Both(props: ScrollAreaProps) {
	return (
		<ScrollArea
			className="h-56 w-72 rounded border border-neutral-300 bg-white"
			{...props}
			orientation="both"
		>
			<ul className="flex w-max flex-col gap-1 p-3 text-sm whitespace-nowrap">
				{items.map((item) => (
					<li key={item}>{item}: the quick brown fox jumps over the lazy dog</li>
				))}
			</ul>
		</ScrollArea>
	)
}
