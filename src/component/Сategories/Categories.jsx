import React from "react";
import {PropTypes} from "prop-types";

//классовая компонента
// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     }
//
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         })
//
//         //два похожих варианта
//
//         // this.state.activeItem = index
//         // this.forceUpdate()
//     }
//
//     render() {
//         const {items, onClickItem} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) => <li className={this.state.activeItem === index ? "active" : ""}
//                                                     onClick={() => this.onSelectItem(index)}
//                                                     key={`${item}_${index}`}>{item}</li>)}
//                 </ul>
//             </div>
//         )
//     }
// }


//функциональная компонента

const Categories = React.memo(( { activeCategory, items, onClickCategory } ) => {

    const onSelectItem = index => {
        onClickCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""}
                    onClick={() => onSelectItem(null)}>Все</li>
                {items
                && items.map( (item, index)=>
                    <li className={activeCategory === index ? "active" : ""}
                        onClick={() => onSelectItem(index)}
                        key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.oneOf(PropTypes.number, null),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = { activeCategory: null, items: [], }

export default Categories;