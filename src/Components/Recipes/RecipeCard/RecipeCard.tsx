import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './RecipeCard.sass'
import FoodStore from '../../../Stores/FoodStore'
import { Link, Redirect } from 'react-router-dom'

type RecipeCardProps = {
    recipeName : string,
    recipeImage: string,
    recipeID: number,
    recipeInfo: any,
    foodStore: FoodStore,
    buttonText: string,
    buttonFunc: any
    updateParentState?: any;
}

class RecipeCard extends React.Component<RecipeCardProps>{
    foodStore : FoodStore;


    constructor(props: RecipeCardProps){
        super(props);
        this.foodStore = this.props.foodStore;
        this.modifyMealPlan = this.modifyMealPlan.bind(this);
        this.redirectToRecipe = this.redirectToRecipe.bind(this)
    }

    modifyMealPlan(){   
        this.props.buttonFunc(this.props.recipeID, this.props.recipeInfo);
        if(this.props.updateParentState){
            this.props.updateParentState()
        }
        
    }

    //user redirected
    redirectToRecipe(){
        window.location.href = "/recipes/" + this.props.recipeID;
    }

    render(){
        return (
            <div className="cardborder">
                <Link className="nav-link" to={"/recipes/" + this.props.recipeID}>
                <Card className="card" >
                    <Card.Img variant="top" src={this.props.recipeImage} />
                    <Card.Body>
                    <Card.Title>{this.props.recipeName}</Card.Title>
                    <Card.Text>
                        This is the summary of the recipe
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Link>
                
                <Button 
                    className="addRecipe" 
                    style={{marginLeft: 40}} 
                    onClick={this.modifyMealPlan}> {this.props.buttonText}</Button>
            </div>
            
        )
    }
}

export default RecipeCard;