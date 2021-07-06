const FOCUS_LOOP_DATA = Symbol('focus loop data')

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

/**
 * @param {HTMLElement} element 
 */
export function focusLoop(element) {
	const focusTargets = Array.from(element.querySelectorAll(FOCUSABLE_SELECTOR))
	const first = focusTargets.shift()
	const last = focusTargets.pop()
	const before = document.activeElement
	element[FOCUS_LOOP_DATA] = {first, last, before}
	element.addEventListener('focusout', onBlur, { passive: false })
	first.focus()
}

export function clearFocusLoop(element) {
	const { before } = element[FOCUS_LOOP_DATA]
	delete element[FOCUS_LOOP_DATA]
	element.removeEventListener('focusout', onBlur, { passive: false })
	before.focus()
}

/**
 * @param {FocusEvent} event 
 */
function onBlur(event) {
	const { first, last } = event.currentTarget[FOCUS_LOOP_DATA]
	const origin = event.target
	const destination = event.relatedTarget
	const focusIsLeavingModal = !event.currentTarget.contains(destination)
	if (focusIsLeavingModal) {
		event.stopPropagation()
		const loopTo = origin === first
			? last
			: first
		loopTo.focus()
	}
}