import { setUserData, clearUserData } from "./Utils";
import { get, post } from "./API";
const endpoints = {
    myAccount: "/users/me",
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
};

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    setUserData(user);
    return user;
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    setUserData(user);
    return user;
}

export async function logout(token) {
    get(endpoints.logout, null, token);
    clearUserData();
}

export async function myAccount() {
    const userData = await get(endpoints.myAccount);
    return userData;
}

// export { login, register, logout };
