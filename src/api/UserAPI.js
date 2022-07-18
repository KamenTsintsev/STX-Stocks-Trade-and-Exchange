import { setTokenItem, clearTokenItem } from "./Utils";
import { get, post } from "./API";
const endpoints = {
    myAccount: "/users/me",
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
};

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    setTokenItem(user.accessToken);
    return user.accessToken;
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    setTokenItem(user.accessToken);
    return user.accessToken;
}

export async function logout(token) {
    get(endpoints.logout, null, token);
    clearTokenItem();
}

export async function myAccount() {
    const userData = await get(endpoints.myAccount);
    return userData;
}

// export { login, register, logout };
