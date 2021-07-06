/**
 * @param {HTMLElement} element 
 * @param {boolean} flag
 */
function toggleInternalFocusable(element, flag) {
	const focusables = element.querySelectorAll(FOCUSABLE_SELECTOR)
	focusables.forEach((focusable) => toggleFocusable(focusable, flag))
}

const FOCUSABLE_SELECTOR = `
	a:link,
	area[href],
	input:not([disabled]),
	select:not([disabled]),
	textarea:not([disabled]),
	button:not([disabled]),
	iframe,
	[tabindex]
`

/** @type {Map<HTMLElement, string>} */
const focusableMap = new Map()
/**
 * @param {HTMLElement} element 
 * @param {boolean} flag
 */
function toggleFocusable(element, flag) {
	if (flag) {
		if (focusableMap.has(element)) {
			const previous = focusableMap.get(element)
			focusableMap.delete(element)
			element.setAttribute('tabindex', previous)
		} else {
			element.removeAttribute('tabindex')
		}
	} else {
		if (!focusableMap.has(element)) {
			const previous = element.getAttribute('tabindex')
			focusableMap.set(element, previous)
		}
		element.setAttribute('tabindex', '-1')
	}
}

export default toggleInternalFocusable