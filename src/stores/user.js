import { ref } from 'vue'

export const username = ref(localStorage.getItem('username') || null)

export function setUsername(name) {
  username.value = name
  localStorage.setItem('username', name)
}

export function clearUsername() {
  username.value = null
  localStorage.removeItem('username')
}