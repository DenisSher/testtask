const OperationGuest = (state = [], action) => {
    switch(action.type) {
      case "ADD_USER": return [...state, action.payload]
      case "SET_USER": return action.payload
      case "ALL_USER": return action.payload
      case "SINGLE_USER": return action.payload
      case "COUPLE_USER": return action.payload
      default: return state
    }
  }
  export default OperationGuest
