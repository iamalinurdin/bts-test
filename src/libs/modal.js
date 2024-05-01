export function closeModal(selector) {
  document.querySelector(`dialog#${selector}`).close()
}

export function openModal(selector) {
  document.getElementById(selector).showModal()
}