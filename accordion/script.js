import toggleInternalFocusables from './toggleFocusables.js'

const buttonState = Symbol('accordion expanded state')
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach((button) =>
	button.addEventListener('click', onClick)
)

/** @param {MouseEvent} event */
function onClick(event) {
	/** @type {HTMLButtonElement} */
	const button = event.target
	const content = button.nextElementSibling
	const state = button[buttonState] ?? button.getAttribute('aria-expanded') === 'false'
	button.setAttribute('aria-expanded', state ? 'true' : 'false')
	content.setAttribute('aria-hidden', state ? 'false' : 'true')
	toggleInternalFocusables(content, state)
	button[buttonState] = !state
}
