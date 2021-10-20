import {Cart, Header, Home} from "./component/import"

import {Route} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    )
}

//два примера функциональный компонент(сверху) и классовый компонент(снизу)

// class App extends React.Component {
//
//     componentDidMount() {
//         axios.get("http://localhost:3000/db.json").then(({data}) => {
//             this.props.setPizzas(data.pizzas)
//         });
//     }
//
//     render() {
//         return (
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
//                     <Route path="/cart" render={() => <Cart />} exact/>
//                 </div>
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzasReducer.items,
//         filters: state.filterReducer.filters,
//     };
// };
//
// const mapDispatchToProps = {
//     setPizzas,
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
