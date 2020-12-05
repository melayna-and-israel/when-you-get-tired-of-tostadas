import React from 'react'

import FoodStore from '../../Stores/FoodStore'
import Food from '../Food/Food';

class Main extends React.Component{
    store: FoodStore;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.store = new FoodStore();
    }
    render(){
        return(
            <div>
                <p>This is the Main page</p>
            </div>
        )
    }
}

export default Main;