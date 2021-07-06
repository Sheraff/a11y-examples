/**
 * get index of leftmost visible item
 * @param {HTMLElement} container scrollable item
 * @param {number} slideWidth width of a single item (including margin)
 */
 export function getNewIndex(container, slideWidth) {
	const x = container.scrollLeft
	return Math.round(x / slideWidth)
}

/**
 * get index of HTML Element from live HTML Collection
 * @param {HTMLCollection} collection live list of items
 * @param {HTMLElement} item item from the list
 */
export function getSlideIndex(collection, item) {
	return Array.prototype.indexOf.call(collection, item)
}

/**
 * get index of leftmost item that wasn't previously visible
 * @param {HTMLCollection} collection live list of items
 * @param {number} newIndex index of first currently visible item
 * @param {HTMLElement} firstInLastViewport last first visible item
 * @param {number} viewportSlideCount number of items visible at a time
 */
export function getFocusIndex(collection, newIndex, firstInLastViewport, viewportSlideCount) {
	const oldIndex = getSlideIndex(collection, firstInLastViewport)
	if (newIndex > oldIndex) {
		const lastInLastViewport = oldIndex + viewportSlideCount
		if (lastInLastViewport > newIndex) {
			return lastInLastViewport
		}
	}
	return newIndex
}

/**
 * apply aria hidden to all elements that aren't visible
 * @param {HTMLCollection} elements live list of items
 * @param {number} index index of first currently visible item
 * @param {number} viewportSlideCount number of items visible at a time
 */
export function updateAriaHidden(elements, index, viewportSlideCount) {
	const upperBound = index + viewportSlideCount
	Array.prototype.forEach.call(elements, (element, i) => {
		const isVisible = i >= index && i < upperBound
		if (isVisible) {
			element.removeAttribute('aria-hidden')
		} else {
			element.setAttribute('aria-hidden', 'true')
		}
	})
}

/**
 * disable control button if there is no more items to scroll to
 * @param {HTMLButtonElement} element button
 * @param {number} index current index
 * @param {number} bound max index on which to disable button
 */
export function updateControl(element, index, bound) {
	element.toggleAttribute('disabled', index === bound)
}