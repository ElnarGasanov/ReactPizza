const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PIZZA_CART":
            //мы говорим возьми всё из старого состояния(...state),
            //и в свойстве items создай новый объект,
            //в этом объекте включи [action.payload.id] и передавай туда например 0,
            //в этот ключ например 0 передай массив[], и когда ты будешь передавать,
            //возьми старый массив ...state.items[action.payload.id], и в конец нового массива,
            //добавь obj c {пиццей}
            return {
                ...state,
                items: {
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload],
                }
            };
        default:
            return state;
    }
}

export default cart;