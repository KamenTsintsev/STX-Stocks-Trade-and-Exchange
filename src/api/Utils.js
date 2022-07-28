import { deleteBookById } from "./DataAPI";

export function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

export function getIsUserLogged() {
    return Boolean(localStorage.getItem("user"));
}

export function setUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function clearUserData() {
    localStorage.removeItem("user");
}

export async function deleteBook(ctx) {
    // const confirmation = confirm("Are you sure about that?");
    // if (confirmation) {
    //     const bookId = ctx.params.id;
    //     await deleteBookById(bookId);
    //     page.redirect("/");
    // }
}
