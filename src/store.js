import { createStore } from "redux"
import OperationGuest from "./reducers/rootReducer"
const store = createStore(OperationGuest)
//store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "ADD_GUEST" })
store.dispatch({ type: "SET_GUEST" })
store.dispatch({ type: "ALL_GUEST" })
store.dispatch({ type: "SINGLE_GUEST" })
store.dispatch({ type: "COUPLE_GUEST" })

export default store
