import { deleteBookById } from "./DataAPI";

export function getToken() {
    return localStorage.getItem("token");
}

export function setTokenItem(token) {
    localStorage.setItem("token", token);
}

export function clearTokenItem() {
    localStorage.removeItem("token");
}

export async function deleteBook(ctx) {
    // const confirmation = confirm("Are you sure about that?");
    // if (confirmation) {
    //     const bookId = ctx.params.id;
    //     await deleteBookById(bookId);
    //     page.redirect("/");
    // }
}
