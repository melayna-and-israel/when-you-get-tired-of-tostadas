import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


import FoodStore from "../../../../Stores/FoodStore"

import Cuisines from "../Cuisines/Cuisines"
import RangeSlider from "../RangeSlider/RangeSlider"
import './Slider.sass'

type Props = {
    foodStore : FoodStore;
    updateRecipe: any;
}

type State = {
}

class Slider extends React.Component<Props, State>{

    render(){
        return(
            <ProSidebar className="slider">
                <Menu iconShape="round">
                    <MenuItem >Filter Recipes</MenuItem>
                    <SubMenu title="Include Cuisines">
                        <Cuisines 
                        updateQuery={(selected: string[]) => this.props.foodStore.updateCuisine(selected)} 
                        updateRecipe={this.props.updateRecipe}
                        ></Cuisines>
                    </SubMenu>
                    <SubMenu title="Exclude Cuisines">
                        <Cuisines 
                            updateQuery={(selected: string[]) => this.props.foodStore.updateExcludeCuisine(selected)} 
                            updateRecipe={this.props.updateRecipe}
                        ></Cuisines>
                    </SubMenu>
                    <SubMenu title="Max CookTime">
                        <div className="rangeSlider">
                            <RangeSlider 
                                updateQuery={(selected: Number) => this.props.foodStore.updateMaxCook(selected)}
                                updateRecipe={this.props.updateRecipe}
                            ></RangeSlider>
                        </div>
                        
                    </SubMenu>
                </Menu>
            </ProSidebar>
        )
    }
}

export default Slider;