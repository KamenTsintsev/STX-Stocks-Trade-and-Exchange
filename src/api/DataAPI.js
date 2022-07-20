import * as api from "./API";

const endpoints = {
    getAllItems: "/data/items?sortBy=_createdOn%20desc",
    createItem: "/data/items",
    getItemById: "/data/items/",
    editItem: "/data/items/",
    deleteItem: "/data/items/",
    addItemToFavorite: "/data/favorites",
    isItemFavorite: (itemId, userId) =>
        `/data/likes?where=itemId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllItems() {
    return await api.get(endpoints.getAllItems);
}

export async function getById(id) {
    return api.get(endpoints.getItemById + id);
}

export async function addItem(itemData) {
    return api.post(endpoints.createItem, itemData);
}

export async function editItem(id, itemData) {
    return api.put(endpoints.editItem + id, itemData);
}

export async function deleteItemById(id) {
    return api.delete(endpoints.deleteItem + id);
}

export async function addItemToFavorite(itemId) {
    return api.post(endpoints.addItemToFavorite, itemId);
}

export async function isItemFavorite(itemId, userId) {
    return api.get(endpoints.isItemFavorite(itemId, userId));
}
