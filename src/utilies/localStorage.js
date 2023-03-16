export function getToken() {
    return localStorage.getItem("token") || false
}

export function setToken(token) {
    localStorage.setItem("token", token)
    return getToken()
}

export function deleteToken() {
    localStorage.removeItem("token")
    return getToken()
}