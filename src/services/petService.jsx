export function getPets() {
    return Promise.resolve([
        {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            description: "Friendly and playful dog",
            image: "my-vite-app/src/assets/images/dog.webp",
            isBoy: true,
        },
        {
            id: 2,
            name: "Whiskers",
            breed: "Siamese Cat",
            description: "Loves cuddles and attention",
            image: "my-vite-app/src/assets/images/cat.jpeg",
            isBoy: false,
        },
        {
            id: 3,
            name: "Max",
            breed: "German Shepherd",
            description: "Loyal and protective companion",
            image: "my-vite-app/src/assets/images/german shepherd.jpg",
            isBoy: true,
        },
    ]);
}


export function getPetById(id) {
    return getPets().then((pets) => pets.find((pet) => pet.id === id));
}
