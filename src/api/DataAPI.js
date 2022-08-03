import * as api from "./API";

const endpoints = {
    getAllItems: "/data/items?sortBy=_createdOn%20desc",
    createItem: "/data/items",
    getItemById: "/data/items/",
    editItem: "/data/items/",
    deleteItem: "/data/items/",
    addItemToFavorite: "/data/favorites",
    removeFavoriteItem: (favId) => `/data/favorites/${favId}`,
    isItemFavorite: (itemId, _ownerId) =>
        `/data/favorites?where=itemId%3D%22${itemId}%22%20and%20_ownerId%3D%22${_ownerId}%22`,
};

export async function getAllItems() {
    return await api.get(endpoints.getAllItems);
}

export async function getById(id) {
    return await api.get(endpoints.getItemById + id);
}

export async function createNewItem(itemData) {
    return await api.post(endpoints.createItem, itemData);
}

export async function editExistingItem(id, itemData) {
    return await api.put(endpoints.editItem + id, itemData);
}

export async function deleteItemById(id) {
    return await api.delete(endpoints.deleteItem + id);
}

export async function addItemToFavorite(itemId) {
    return await api.post(endpoints.addItemToFavorite, { itemId });
}

// export async function getFavoriteItems(itemId, _ownerId) {
//     return api.get(endpoints.isItemFavorite(itemId, _ownerId));
// }

export async function isItemFavorite(itemId, userId) {
    return api.get(endpoints.isItemFavorite(itemId, userId));
}

export async function removeFavoriteItem(favId) {
    return api.delete(endpoints.removeFavoriteItem(favId));
}
