/*
function counter (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}
export default counter
*/
//here we set up a reducer, it needs initialState (empty array in our case), and action - simple object with type and payload
const reducer = (state = [], action) => {
//switch for action types to have different operations on state within one reducer
  switch(action.type) {
//here we return spreaded state (array of objects) with a new object in payload
    case "ADD_USER": return [...state, action.payload]
//here we return just a payload which would be array of objects, previously filtered locally
    case "SET_USER": return action.payload
//probably won't work, but must return filtered state with id, passed as an argument to action creator (action payload)
    case "DELETE_USER": return state.filter(x => x.id !== action.payload)
//return [] by default
    default: return state
  }
}
export default counter