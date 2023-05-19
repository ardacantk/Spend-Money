import { createSlice } from "@reduxjs/toolkit";

import productJSON from "../product.json"

const data = productJSON.products;

export const productSlice = createSlice({
    name: "product",
    initialState: {
        items: data,
        totalMoney: 128000000000,
        money: 128000000000,
    },
    reducers: {
        buyItem: (state, action) => {
            const { id, count } = action.payload;
            const currentItem = state.items.find(item => item.id === id);
            currentItem.count = count;

            let x = 0

            state.items.map(i => {
                x += Number(i.count) * Number(i.productPrice);
            })

            state.money = state.totalMoney - x;

        },
    }
});

export const { buyItem } = productSlice.actions;
export default productSlice.reducer;