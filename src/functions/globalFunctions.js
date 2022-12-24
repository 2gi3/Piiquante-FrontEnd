export function logOut() {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('UserName')
  sessionStorage.removeItem('email')
  window.location = '/'
}
