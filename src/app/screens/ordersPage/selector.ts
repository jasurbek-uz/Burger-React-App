import { createSelector } from "@reduxjs/toolkit";
import { AppRootState, HomePageState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
	selectOrdersPage,
	(OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
	selectOrdersPage,
	(OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
	selectOrdersPage,
	(OrdersPage) => OrdersPage.finishidOrders
);