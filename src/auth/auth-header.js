
export default function authHeader() {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (userToken) {
        return { Authorization: 'Bearer ' + userToken };
    } else {
        return console.log('error token')
    }
}