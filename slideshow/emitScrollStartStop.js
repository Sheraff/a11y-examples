const MIN_DELTA = 10
const TIMEOUT_DURATION = 350
const SCROLL_TIMEOUT = Symbol('scroll timeout')
const LAST_X = Symbol('last scroll x')

/**
 * @param {UIEvent} event 
 */
function onScroll(event) {
	const element = event.currentTarget
	
	if (!element[SCROLL_TIMEOUT]) {
		const x = element.scrollLeft
		if (Math.abs(element[LAST_X] - x) < MIN_DELTA) {
			return
		}
	}

	if (element[SCROLL_TIMEOUT]) {
		clearTimeout(element[SCROLL_TIMEOUT])
	} else {
		element.dispatchEvent(new CustomEvent('scrollStart'))
	}
	
	element[SCROLL_TIMEOUT] = setTimeout(() => {
		delete element[SCROLL_TIMEOUT]
		element.dispatchEvent(new CustomEvent('scrollStop'))
		element[LAST_X] = element.scrollLeft
	}, TIMEOUT_DURATION)
}

/**
 * @param {HTMLElement} element 
 */
export default function emitScrollStartStop(element) {
	element[LAST_X] = 0
	element.addEventListener('scroll', onScroll, {passive: true})
}
