import React from "react"

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Page.sass'

import FoodStore from '../../../Stores/FoodStore'

type PageProps = {
    foodStore: FoodStore;
}

class Page extends React.Component<PageProps>{
    foodStore: FoodStore;

    constructor(props: PageProps){
        super(props);
        this.foodStore = props.foodStore;
        // this.foodStore.client.getARandomFoodJoke(console.log);
    }

    getRecipes(){
        
    }
    
    render(){
        return (
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Components">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        )
    }
}

export default Page;