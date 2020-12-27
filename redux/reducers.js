export const initialState = {
    usersList: [], 
}

export const addInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "Add_Info":
            console.log("Add_Info", state.usersList)
            return {state,
                usersList: [...state.usersList, action.payload]
            }
        case "ClearList":
               
                return {state,
                    usersList: []
                }
        default:
            return state;
    }
}