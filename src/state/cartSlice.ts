import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ICartProduct {
    id: number,
    img: string,
    name: string,
    price: string,
    oldPrice:string
}

export interface ICartState {
    value: ICartProduct[]
}

const initialState: ICartState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<ICartProduct>) => {
            state.value.push(action.payload);
          
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { addToCart,
    // removeFromCart,
    // resetCart 
} = cartSlice.actions

export default cartSlice.reducer