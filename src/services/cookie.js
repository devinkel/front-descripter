import Cookie from "js-cookie"

const TOKEN_NAME = '_login_token'

export default {
    setToken(token) {
        Cookie.set(TOKEN_NAME, token, { expires: 30 })
    },

    getToken(token) {
        return Cookie.get(TOKEN_NAME)
    },

    deleteToken(token) {
        Cookie.remove(TOKEN_NAME)
    }
}