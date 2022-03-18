const initialState = {
    users: [],
    loading: false
}

const loadDatReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS': 
        return {...state, users: action.payload}

        case 'SET_IS_LOADED': 
        return {...state, loading: action.payload}

        case 'DELETE_USER' : {
           const newArray =  action.payload.filter(user => !user.isSelected  &&  user.original).map((user, i) => {
               user.original.id = i+1
               return user.original
            }) 
        return {...state, users: newArray}
        }

        case 'ADD_USER' : {
            const newUsers = state.users.concat({...action.payload, address: {zipcode: action.payload.zipcode}, id: state.users.length + 1 })
            return {...state, users: newUsers}
        }
        
        
        default: return state
    }
}

export default loadDatReducer

