import axios from "axios";

export const setLoaded = payload => ({
    type: "SET_LOADED",
    payload
})

// тут запрос через прокси на 3000 сервер(см. в package.json)
export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/pizzas/?${
        category !== null ? `category=${category}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setPizzas(data));
        })
};


export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
});
