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



    @action updateDietType(selected:string){
        this.dietType = selected;
    }

    @action updateIntolerances(selected:string[]){
        this.intolerances = selected;
    }
    @action updateDislikes(selected:string){
        this.dislikes = selected;
    }

    @action updateCuisine(selected: string[]){
        this.addRecipeQuery("cuisine", selected.join(","));
    }

    @action updateExcludeCuisine(selected: string[]){
        this.addRecipeQuery("excludeCuisine", selected.join(","));
    }

    @action updateMaxCook(selected: Number){
        this.addRecipeQuery("maxReadyTime", selected);
        console.log(this.recipeQuery);
    }

    @action updateSort(selected: string, order: string){
        this.addRecipeQuery("sort", selected);
        this.addRecipeQuery("sortDirection", order);
    }

    addRecipeQuery(k: string, v: any){
        this.recipeQuery[k] = v;
    }


}

export default FoodStore;