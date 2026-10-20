import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ScrollArea } from './scroll-area'

describe(ScrollArea, () => {
	it('renders its children', () => {
		render(
			<ScrollArea>
				<p>Content</p>
			</ScrollArea>,
		)
		expect(screen.getByText('Content')).toBeInTheDocument()
	})

	it('passes native attributes through to the root', () => {
		render(
			<ScrollArea data-testid="root" aria-label="Messages">
				Content
			</ScrollArea>,
		)
		expect(screen.getByTestId('root')).toHaveAttribute('aria-label', 'Messages')
		expect(screen.getByTestId('root')).toHaveAttribute('data-slot', 'scroll-area')
	})
})
