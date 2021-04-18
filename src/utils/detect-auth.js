const TOKEN = 'primary-key'

/* 
    setting the current token into the localStorage
*/
export const login = (current_token) => localStorage.setItem(TOKEN, current_token)

/* 
    remove the token from localStorage
*/
export const logout = () => localStorage.removeItem(TOKEN)
/* 
    checking the current user is still logged in
*/
export const isLogin = () => localStorage.getItem(TOKEN) ? true : false 