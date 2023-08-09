import jwtDecode from "jwt-decode";

export default function authHelper() {

    function getToken () {
        return localStorage.getItem('user');
    }

    function checkIsAdmin() {
        let authToken = getToken()
        if (authToken == null) {
            return false
        } else {
            const decoded = jwtDecode(authToken)
            return decoded.roles != null && decoded.roles.toLowerCase() === 'role_admin';
        }
    }

    return checkIsAdmin()

}