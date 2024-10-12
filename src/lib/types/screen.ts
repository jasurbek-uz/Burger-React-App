import NewDishes from "../../app/screens/homePage/NewDishes";
import { Member } from "./member";
import { Order } from "./orders";
import { Product } from "./product";

/* REACT APP STATE*/
export interface AppRootState {
	homePage: HomePageState;
	productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

// homepage
export interface HomePageState {
	popularDishes: Product[];
	newDishes: Product[];
	topUsers: Member[];
}
// products
export interface ProductsPageState {
	restaurant: Member | null;
	chosenProduct: Product | null;
	products: Product[];
}

// orders
export interface OrdersPageState{
  pausedOrders: Order[];
  processOrders: Order[];
  finishidOrders: Order[];
 }
