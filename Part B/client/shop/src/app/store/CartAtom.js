import { atom } from "jotai";

export const cartAtom = atom(
    [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 },
        { id: 3, name: 'Item 3', price: 300 },
        { id: 4, name: 'Item dsadasdasdsadds', price: 300 },

    ]
);