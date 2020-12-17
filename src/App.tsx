import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import FoodStore from './Stores/FoodStore';

import Main from './Components/Main/Main';
import Recipes from './Components/Recipes/Page/Page'
import Header from './Components/Header/Header'
import MealPlan from './Components/MealPlan/Page/Page'

class App extends React.Component{
    store: FoodStore;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.store = new FoodStore();
    }
    render(){
        return (
            <Router>
                <Header foodStore={this.store}></Header>
                <Switch>
                    <Route path="/recipes">
                        <Recipes foodStore = {this.store}/>
                    </Route>
                    <Route path="/mealplan">
                        <MealPlan></MealPlan>
                    </Route>

                    {/* Pass the store as a prop to the main page */}
                    <Route path="/">
                        <Main foodStore = {this.store}/>
                    </Route>
                    
                </Switch>
            </Router>
        )
    }
}

export default App;