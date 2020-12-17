import {action, observable} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';
import ComplexSearch from './complexSearch'

class FoodStore{

    client: DefaultApi;
    @observable recipeQuery: ComplexSearch;
    @observable params: string;
    // dietType:string;
    // intolerances:string[];
    // dislikes:string;

    constructor(){
        this.client = new DefaultApi(new ApiClient());
        this.recipeQuery = {
            _number : 10,
        };
        this.params = "";
        // this.dietType = "No Diet Restriction";
        // this.intolerances = [];
        // this.dislikes = "";
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

    @action clearQuery(){
        this.recipeQuery = {
            _number : 10,
        };
    }

    @action updateParams(selected: string){
        this.params = selected;
    }

    addRecipeQuery(k: string, v: any){
        this.recipeQuery[k] = v;
    }


}

export default FoodStore;