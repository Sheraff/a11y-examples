const tabindexBefore = Symbol('tabindex before temporary focus')

/**
 * @param {HTMLElement} element 
 */
export default function temporaryFocus(element) {
	element[tabindexBefore] ??= element.getAttribute('tabindex')
	element.setAttribute('tabindex', '-1')
	element.focus()
	element.addEventListener('blur', () => {
		if (element[tabindexBefore]) {
			element.setAttribute('tabindex', element[tabindexBefore])
		} else {
			element.removeAttribute('tabindex')
		}
	}, {once: true, passive: true})
}