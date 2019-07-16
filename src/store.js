import { createStore } from "redux"
import OperationGuest from "./reducers/rootReducer"
const store = createStore(OperationGuest)
store.subscribe(() => console.log(store.getState()))

//store.dispatch({ type: "INCREMENT" })
//store.dispatch({ type: "DECREMENT" })

store.dispatch({ type: "ADDGUEST" })
store.dispatch({ type: "SETGUEST" })

export default store
