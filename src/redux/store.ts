import { Person } from "@/models";
import { configureStore } from '@reduxjs/toolkit'
import { favoriteSlice, peopleSlice } from "./states";

export interface AppStore {
    people: Person[];
    favorite: Person[];
}

export default configureStore <AppStore> ({
    reducer: {
        people: peopleSlice.reducer,
        favorite: favoriteSlice.reducer
    }
});
