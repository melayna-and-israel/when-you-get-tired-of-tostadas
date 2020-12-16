import {action, observable} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';
import ComplexSearch from './complexSearch'

class FoodStore{

    client: DefaultApi;
    @observable recipeQuery: ComplexSearch;
    @observable dietType:string;
    @observable intolerances:string[];
    @observable dislikes:string;

    constructor(){
        this.client = new DefaultApi(new ApiClient());
        this.recipeQuery = {
            _number : 10,
        }
        this.dietType = "No Diet Restriction";
        this.intolerances = [];
        this.dislikes = "";
    }

    @action addRecipeQuery(k: string, v: any){
        this.recipeQuery[k] = v;
    }


    @action updateDietType(selected:string){
        this.dietType = selected;
    }

    @action updateIntolerances(selected:string[]){
        this.intolerances = selected;
    }
    @action updateDislikes(selected:string){
        this.dislikes = selected;
    }


}

export default FoodStore;