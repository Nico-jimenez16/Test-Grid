import { LocalStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit'

const initialState: Person[] = []

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITE) 
        ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITE) as string) 
        : initialState,
    reducers: {
        addFavorite: ( _ , action) => {
            setLocalStorage(LocalStorageTypes.FAVORITE , action.payload)
            return action.payload
        },
        removeFavorite: (state, action) => {
            const filteredState = current(state).filter((p: Person) => p.id !== action.payload.id);
            setLocalStorage(LocalStorageTypes.FAVORITE, filteredState);
            return filteredState;
        }
    }
});


export const { addFavorite, removeFavorite } = favoriteSlice.actions;
