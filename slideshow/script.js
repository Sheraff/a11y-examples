import emitScrollStartStop from './emitScrollStartStop.js'
import temporaryFocus from './temporaryFocus.js'
import {
	getNewIndex,
	getFocusIndex,
	getSlideIndex,
	updateAriaHidden,
	updateControl,
} from './slideshowUtils.js'

const container = document.getElementById('container')
const track = document.getElementById('track')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const span = document.getElementById('span')


let viewportSlideCount = 1
let slideWidth = 1
function onResize() {
	const first = track.firstElementChild
	const second = first.nextElementSibling
	slideWidth = second.offsetLeft - first.offsetLeft
	viewportSlideCount = Math.round(container.offsetWidth / slideWidth)
}


let firstInLastViewport = track.firstElementChild
function onScrollStop() {
	const index = getNewIndex(container, slideWidth)
	const focusIndex = getFocusIndex(track.children, index, firstInLastViewport, viewportSlideCount)
	temporaryFocus(track.children[focusIndex])
	updateAriaHidden(track.children, index, viewportSlideCount)
	updateControl(prev, index, 0)
	updateControl(next, index, track.childElementCount - viewportSlideCount)
	span.textContent = index + 1
	firstInLastViewport = track.children[index]
}

/**
 * @param {MouseEvent} event 
 */
function onClickNav(event) {
	const direction = 'next' in event.currentTarget.dataset ? 1 : -1
	const lastIndex = getSlideIndex(track.children, firstInLastViewport)
	const index = lastIndex + viewportSlideCount * direction
	container.scrollTo({
		left: slideWidth * index,
		behavior: 'smooth'
	})
}

function init() {
	onResize()
	next.removeEventListener('click', init, {passive: true})
	container.removeEventListener('scrollStart', init)
}

emitScrollStartStop(container)
next.addEventListener('click', init, {passive: true})
container.addEventListener('scrollStart', init)
container.addEventListener('scrollStop', onScrollStop)
window.addEventListener('resize', onResize, {passive: true})
prev.addEventListener('click', onClickNav, {passive: true})
next.addEventListener('click', onClickNav, {passive: true})


