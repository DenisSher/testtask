import { createStore } from "redux";
import counter from "./reducer";
const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

export default store;
