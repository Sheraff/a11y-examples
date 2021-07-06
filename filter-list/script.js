const filters = [...document.querySelectorAll('#filters button')]
const items = [...document.querySelectorAll('#list li')]
const DEFAULT_LIST = items.map(item => item.textContent)

filters.forEach(filter => {
	filter.addEventListener('click', onClick)
})

/**
 * @param {MouseEvent} event 
 */
function onClick(event) {
	// update button itself
	const filter = event.currentTarget
	const pressed = filter.getAttribute('aria-pressed') === 'true'
	filter.setAttribute('aria-pressed', pressed ? 'false' : 'true')
	// reflect changes on list
	const allowList = getAllowList(filters)
	const focusTarget = updateList(allowList, items)
	if (focusTarget) {
		focusTarget.focus()
	}
}

/**
 * @param {HTMLElement[]} filters 
 * @returns {string[]}
 */
function getAllowList(filters) {
	const list = filters.filter(filter => filter.getAttribute('aria-pressed') === 'true')
	if (list.length === 0) {
		return DEFAULT_LIST
	}
	return list.map(item => item.textContent)
}

/**
 * @param {string[]} allowList 
 * @param {HTMLElement[]} items 
 * @returns {HTMLElement} first remaining item 
 */
function updateList(allowList, items) {
	let first
	items.forEach(item => {
		const flag = passes(allowList, item)
		if (!first && flag) {
			first = item
		}
		if (flag) {
			item.style.removeProperty('display')
		} else {
			item.style.setProperty('display', 'none')
		}
	})
	return first
}

/**
 * @param {string[]} allowList 
 * @param {HTMLElement} element 
 */
function passes(allowList, element) {
	const text = element.textContent
	return allowList.some(letter => text.includes(letter))
}