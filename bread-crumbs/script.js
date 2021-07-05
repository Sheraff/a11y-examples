const button = document.querySelector('button')

button.addEventListener('click', () => {
	const li = button.parentElement
	li.parentElement.removeChild(li)
})