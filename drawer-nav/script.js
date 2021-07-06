import { focusLoop, clearFocusLoop } from './focusLoop.js'

const drawer = document.getElementById('drawer')
const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')

openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)

function close() {
	drawer.classList.remove('show')
	clearFocusLoop(drawer)
	window.removeEventListener('keydown', closeOnEscape, {passive: false})
}

function open() {
	drawer.classList.add('show')
	focusLoop(drawer)
	window.addEventListener('keydown', closeOnEscape, {passive: false})
}

/**
 * @param {KeyboardEvent} event 
 */
function closeOnEscape(event) {
	if (event.key === 'Escape') {
		event.preventDefault()
		close()
	}
}