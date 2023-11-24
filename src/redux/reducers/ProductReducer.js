import { createSlice } from '@reduxjs/toolkit'


let ProductSlice = createSlice({

    name:"product",
    initialState:{
        ProductList: [],

    },
    reducers:{
        saveProductDetails: (state,action) =>{
            state.ProductList=action.payload //productlist pass by payload
        },
        getProductDetails: () =>{}
    }
    
})
export default  ProductSlice.reducer
export const {saveProductDetails,getProductDetails} = ProductSlice.actions