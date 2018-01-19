export const loginUser = () => {
  return fetch('http://localhost:3001').then(response => response.json())
}
