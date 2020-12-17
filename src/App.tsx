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
import Recipe from './Components/Recipe/Page/Page'

class App extends React.Component{
    store: FoodStore;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.store = new FoodStore();
    }
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"> Start</Link>
                            </li>
                            <li>
                            <Link to="/recipes"> Filter Recipes</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route path="/recipes" exact>
                        <Recipes foodStore = {this.store}/>
                    </Route>
                    <Route path="/recipes/:id">
                        <Recipe  foodStore = {this.store} />
                        
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