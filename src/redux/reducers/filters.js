const initialState = {
    sortBy: {
        type: "popular",
        order: "desc",
    },
    category: null,
    rating: null,
}

const filters = (state = initialState, action) => {
    if(action.type === "SET_SORT_BY"){
        return{
            ...state,
            sortBy: action.payload
        }
    }
    if(action.type === "SET_CATEGORY"){
        return{
            ...state,
            category: action.payload
        }
    }
    if(action.type === "SET_RATING"){
        return{
            ...state,
            rating: action.payload
        }
    }
    return state;
}

export default filters;