import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import FoodStore from '../../../Stores/FoodStore';
import RecipeCards from '../../Recipes/RecipeCards/RecipeCards'
import './Page.sass'

type Props = {
    foodStore : FoodStore
}

type State = {
    mealPlan: any[]
}

class Page extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            mealPlan: this.getRecipes(this.props.foodStore.mealPlan)
        }
        this.setState(this.state);

        this.updateRecipes = this.updateRecipes.bind(this);
    }

    getRecipes(mealPlan: Map<number, any>): any[]{
        let recipes: any[] = []
        mealPlan.forEach((value, key) => {
            recipes.push(value);
        });
        return recipes;
    }

    updateRecipes(){
        this.setState({
            mealPlan: this.getRecipes(this.props.foodStore.mealPlan)
        })
    }

    render(){
        return (
            <Container style={{backgroundColor: "#f5f5f5"}}>
                <Row className="page" >
                    <Col>
                    <p className="title"> Meal Plan</p>
                    </Col>
                </Row>
                <RecipeCards 
                recipes={this.state.mealPlan}
                updateparentState={() => this.updateRecipes()}
                buttonText="Remove From Meal Plan"
                buttonFunc={(id: number, recipeData: any)=>this.props.foodStore.removeFromMealPlan(id, recipeData)}
                foodStore={this.props.foodStore}></RecipeCards>
            </Container>
        )
        
    }
    
}

export default Page;