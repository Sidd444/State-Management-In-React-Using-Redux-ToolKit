
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    shoes: [{id: 1, text: "Hello world"}]
}



export const shoeSlice = createSlice({
    name: 'shoe',
    initialState,
    reducers: {
        addShoe: (state, action) => {
            const shoe = {
                id: nanoid(), 
                text: action.payload
            }
            state.shoes.push(shoe)
        },
        removeShoe: (state, action) => {
            state.shoes = state.shoes.filter((shoe) => shoe.id !== action.payload )
        },

    }
})

export const {addShoe, removeShoe} = shoeSlice.actions

export default shoeSlice.reducer
