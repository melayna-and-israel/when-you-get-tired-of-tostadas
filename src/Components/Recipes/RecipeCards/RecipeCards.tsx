import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RecipeCard from '../RecipeCard/RecipeCard'
import FoodStore from "../../../Stores/FoodStore"

type Props = {
    recipes: any[],
    foodStore: FoodStore,
    buttonText: string,
    buttonFunc: any,
    updateparentState?: any,
}

type State = {
    width: any
}

class RecipeCards extends React.Component<Props, State>{
    width: any;

    constructor(props: Props){
        super(props);
        this.renderRecipes= this.renderRecipes.bind(this);
        this.renderRecipeRows = this.renderRecipeRows.bind(this);
    }

    renderRecipeRows(){
        let recipeslist = []
        let cols: number = 4;
        for(let j = 0;j<Math.ceil(this.props.recipes.length/cols);j++){
            recipeslist.push(
                <Row key={j} lg={cols}>{this.renderRecipes(cols, j)}</Row>
            );
        }
        return recipeslist;
    }

    removeMealFromMealPrep(id: number){

    }

    renderRecipes(cols: number, row: number){
        let recipesList = [];
        
        for(let i = 0;i<cols;i++){
            if(cols*row +i < this.props.recipes.length){
                let recipe = this.props.recipes[cols*row +i];
                if(this.props.updateparentState){
                    recipesList.push(
                        <Col key={cols*row +i}>
                            <RecipeCard 
                                buttonText={this.props.buttonText}
                                buttonFunc={(id: number, recipe: any)=>this.props.buttonFunc(id, recipe)}
                                recipeInfo={recipe}
                                foodStore = {this.props.foodStore}
                                recipeID={recipe.id} recipeName={recipe.title} 
                                recipeImage={recipe.image}
                                updateParentState={()=>this.props.updateparentState()}></RecipeCard>
                        </Col>
                    )
                }
                else{
                    recipesList.push(
                        <Col key={cols*row +i}>
                            <RecipeCard 
                                buttonText={this.props.buttonText}
                                buttonFunc={(id: number, recipe: any)=>this.props.buttonFunc(id, recipe)}
                                recipeInfo={recipe}
                                foodStore = {this.props.foodStore}
                                recipeID={recipe.id} recipeName={recipe.title} 
                                recipeImage={recipe.image
                            }></RecipeCard>
                        </Col>
                    )
                }
               
            }
        }
        return recipesList;
    }

    render(){
        return (
            <div>
                {this.renderRecipeRows()}
                
            </div>
        )
    }

}

export default RecipeCards;