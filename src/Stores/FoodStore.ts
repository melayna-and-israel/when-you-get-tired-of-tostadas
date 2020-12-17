import {action, observable} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';
import ComplexSearch from './complexSearch'

class FoodStore{

    client: DefaultApi;
    @observable recipeQuery: ComplexSearch;
    // dietType:string;
    // intolerances:string[];
    // dislikes:string;

    constructor(){
        this.client = new DefaultApi(new ApiClient());
        this.recipeQuery = {
            _number : 10,
        }
        // this.dietType = "No Diet Restriction";
        // this.intolerances = [];
        // this.dislikes = "";
    }

    @action addRecipeQuery(k: string, v: any){
        this.recipeQuery[k] = v;
    }


    @action updateDietType(selected:string){
        this.addRecipeQuery("diet", selected);
        // this.dietType = selected;
    }

    @action updateIntolerances(selected:string[]){
        this.addRecipeQuery("intolerances", selected);
        // this.intolerances = selected;
    }
    @action updateDislikes(selected:string){
        this.addRecipeQuery("excludeIngredients", selected);
        // this.dislikes = selected;
    }


}

export default FoodStore;