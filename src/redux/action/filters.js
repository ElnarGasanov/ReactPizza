export const setSortBy = ({ type, order }) => ({
    type: "SET_SORT_BY",
    payload: {type, order},
});

export const setCategory = (catIndex) => ({
    type: "SET_CATEGORY",
    payload: catIndex,
});

// у json server`a нету функции сортировка по рейтингу
export const setRating = (ratingIndex) => ({
    type: "SET_CATEGORY",
    payload: ratingIndex,
});