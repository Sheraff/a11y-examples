const container = document.getElementById('container')
const button = container.querySelector('button')
const popover = container.querySelector('div')

let state = false
button.addEventListener('click', toggle)
container.addEventListener('focusout', onBlur)

function toggle() {
	changeState(!state)
}

/**
 * @param {boolean} force 
 */
function changeState(force) {
	state = force
	button.setAttribute('aria-expanded', state ? 'true' : 'false')
}

/**
 * @param {UIEvent} event 
 */
function onBlur(event) {
	if(!state) {
		return
	}
	const destination = event.relatedTarget
	const focusOutside = !container.contains(destination)
	if (focusOutside) {
		changeState(false)
	}
}