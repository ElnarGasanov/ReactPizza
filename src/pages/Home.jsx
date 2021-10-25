import {Categories, PizzaBlock, PizzaLoadingBlock, Sort} from "../component/import";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaToCart} from "../redux/action/cart";

//статичные массивы фильтров и сортировок
const categoryNames = ["Мясные", "Вегатерианская", "Гриль", "Острые", "Закрытые",];
const sortItems = [
    {name: "популярности(не актуально)", type: "popular", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}
];

const Home = (callback, deps) => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy,))
    }, [category, dispatch, sortBy,])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    return (
        <main className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={categoryNames}/>
                <Sort onClickSortType={onSelectSortType}
                      activeSortType={sortBy.type}
                      items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            addedCountPizzas={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}/>))
                        : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </main>
    )
}

export default Home;