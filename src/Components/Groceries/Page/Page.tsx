import React from "react"
import FoodStore from '../../../Stores/FoodStore';
import Container from 'react-bootstrap/Container';

import './Page.sass'


type PageProps = {
    foodStore: FoodStore;
}

type State = {
    groceries: any
}

class Page extends React.Component<PageProps, State>{
    private foodStore: FoodStore;

    constructor(props:any){
        super(props);
        this.foodStore = props.foodStore;

        this.state = {
            groceries: []
        }
        // this.createGroceriesList();
    }

    //Check if ingredient has been added already
    checkForIngredient(ingredientsList:any, object:any){
        return (ingredientsList.includes(object, 0));
            
        // if(ingredientsList.some(ingredient => ingredient.name === name)){
        //     alert("Object found inside the array.");
        // } else{
        //     alert("Object not found.");
        // }

    }

    //Create list of grocieries baesd on the meal plan
    // createGroceriesList(){
    //     //ex: groceries ={'blueberries': [{22: g}], 'flour': [{1: cup}, {2, tbsp}]}
    //     let meals = this.foodStore.meals;
    //     let i;
    //     let ingredientsList = [];
    //     for (i = 0; i < meals.size; i++){
    //         this.foodStore.client.getRecipeIngredientsByID(meals[i], (error: any, data: any)=>{
    //             console.log(data);
    //             console.log(data.image);
    //             if(data){
    //                 ingredientsList.push(data);
                    

    //             }
                
    //         });
    //     }
        

    //     let groceries = []
    //     ingredientsList = [{
    //         "ingredients": [
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "g",
    //                         "value": 222.0
    //                     },
    //                     "us": {
    //                         "unit": "cups",
    //                         "value": 1.5
    //                     }
    //                 },
    //                 "image": "blueberries.jpg",
    //                 "name": "blueberries"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "",
    //                         "value": 1.0
    //                     },
    //                     "us": {
    //                         "unit": "",
    //                         "value": 1.0
    //                     }
    //                 },
    //                 "image": "egg-white.jpg",
    //                 "name": "egg white"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "Tbsps",
    //                         "value": 2.0
    //                     },
    //                     "us": {
    //                         "unit": "Tbsps",
    //                         "value": 2.0
    //                     }
    //                 },
    //                 "image": "flour.png",
    //                 "name": "flour"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "g",
    //                         "value": 150.0
    //                     },
    //                     "us": {
    //                         "unit": "cup",
    //                         "value": 0.75
    //                     }
    //                 },
    //                 "image": "sugar-in-bowl.png",
    //                 "name": "granulated sugar"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "tsp",
    //                         "value": 1.0
    //                     },
    //                     "us": {
    //                         "unit": "tsp",
    //                         "value": 1.0
    //                     }
    //                 },
    //                 "image": "lemon-juice.jpg",
    //                 "name": "fresh lemon juice"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "pinch",
    //                         "value": 1.0
    //                     },
    //                     "us": {
    //                         "unit": "pinch",
    //                         "value": 1.0
    //                     }
    //                 },
    //                 "image": "ground-nutmeg.jpg",
    //                 "name": "nutmeg"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "",
    //                         "value": 2.0
    //                     },
    //                     "us": {
    //                         "unit": "",
    //                         "value": 2.0
    //                     }
    //                 },
    //                 "image": "pie-crust.jpg",
    //                 "name": "pie dough round"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "Tbsps",
    //                         "value": 2.0
    //                     },
    //                     "us": {
    //                         "unit": "Tbsps",
    //                         "value": 2.0
    //                     }
    //                 },
    //                 "image": "tapioca-pearls.png",
    //                 "name": "quick cooking tapioca"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "g",
    //                         "value": 305.0
    //                     },
    //                     "us": {
    //                         "unit": "cups",
    //                         "value": 2.5
    //                     }
    //                 },
    //                 "image": "rhubarb.jpg",
    //                 "name": "trimmed rhubarb"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "tsps",
    //                         "value": 0.333
    //                     },
    //                     "us": {
    //                         "unit": "tsps",
    //                         "value": 0.333
    //                     }
    //                 },
    //                 "image": "salt.jpg",
    //                 "name": "salt"
    //             },
    //             {
    //                 "amount": {
    //                     "metric": {
    //                         "unit": "Tbsps",
    //                         "value": 0.5
    //                     },
    //                     "us": {
    //                         "unit": "Tbsps",
    //                         "value": 0.5
    //                     }
    //                 },
    //                 "image": "butter-sliced.jpg",
    //                 "name": "unsalted butter"
    //             }
    //         ]
    //     }];
    //     let j;

    //     for (i = 0; i < ingredientsList.length; i++){
    //         let mealIngredients = ingredientsList[i].ingredients;
    //         for (j =0; j < ingredientsList[i].ingredients.length; j++){
                
    //             let ingredientName = mealIngredients[j].name;
    //             let ingredientAmount = mealIngredients[j].amount.us.value;
    //             let ingredientMeasurement = mealIngredients[j].amount.us.unit;
    //             if (!this.checkForIngredient(groceries, mealIngredients)){
    //                 groceries.push({[ingredientName] : {[ingredientAmount]: ingredientMeasurement}});
    //             }
    //             else{
    //                 for (i = 0; i < groceries.length; i++){
    //                     for (const [key, value] of Object.entries(groceries[i])) {
    //                         if (key==ingredientName){
    //                             let found = 0;
    //                             for (const [amount, metric] of Object.entries(value)) {
    //                                 if (metric == ingredientMeasurement){
    //                                     found = 1;
    //                                     groceries[i][key] = {[amount+ingredientAmount] : ingredientMeasurement}
    //                                 }
    //                             }
    //                             if (found == 0){
    //                                 groceries[i][key][ingredientAmount] = ingredientMeasurement;
    //                             }
    //                         }
                            
    //                     }
    //                 }
    //             }
                
    //         }
    //     }
    //     console.log(groceries);
    //     let groceriesList = []
    //     for (i = 0; i < groceries.length; i++){
    //         for (const [key, value] of Object.entries(groceries[i])) {
    //             for (const [amount, metric] of Object.entries(value)) {
                    
    //                 console.log(amount, metric);
    //                 groceriesList.push(
    //                     <li key = {key + metric}>{amount} {metric} of {key}</li>
    //                 )
    //             }
    //         }
    //     }
    //     return groceriesList;
        
        
    // }

    render(){
        return(
            <Container>
                <h1>Your Meal Plan Grocery List</h1>
                <ul>
                    <li>Groceries</li>
                    {/* {this.createGroceriesList()} */}
                </ul>
               
            </Container>
            
            
        )
    }
    
}

export default Page;
