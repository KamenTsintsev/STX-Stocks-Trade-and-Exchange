import * as api from "./API";

const endpoints = {
    getAllPets: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
    createPet: "/data/pets",
    getPetById: "/data/pets/",
    editPet: "/data/pets/",
    deletePet: "/data/pets/",
    donateToPet: "/data/donation",
    getPetDonations: (petId) =>
        `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    isDonated: (petId, userId) =>
        `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllPets() {
    return api.get(endpoints.getAllPets);
}

export async function getById(id) {
    return api.get(endpoints.getPetById + id);
}

export async function addPet(petData) {
    return api.post(endpoints.createPet, petData);
}

export async function editPet(id, petData) {
    return api.put(endpoints.editPet + id, petData);
}

export async function deletePetById(id) {
    return api.delete(endpoints.deletePet + id);
}

export async function donateToPet(petId) {
    return api.post(endpoints.donateToPet, petId);
}

export async function getPetDonations(petId) {
    return api.get(endpoints.getPetDonations(petId));
}

export async function isDonatedToPet(petId, userId) {
    return api.get(endpoints.isDonated(petId, userId));
}
