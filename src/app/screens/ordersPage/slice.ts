import { createSlice } from "@reduxjs/toolkit";
import {  OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
	pausedOrders: [],
	processOrders: [],
	finishidOrders: [],
};

const ordersPageSlice = createSlice({
	name: "ordersPage", 
	initialState,
	reducers: {
		setPausedOrders(state, action) {
			state.pausedOrders = action.payload;
		},
		setProcessOrders(state, action) {
			state.processOrders = action.payload;
		},
		setFinishidOrders(state, action) {
			state.finishidOrders = action.payload;
		},
	},
});

export const { setPausedOrders, setProcessOrders, setFinishidOrders } =
	ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
