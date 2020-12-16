import {action, observable} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';
import ComplexSearch from './complexSearch'

class FoodStore{

    client: DefaultApi;
    @observable recipeQuery: ComplexSearch;

    constructor(){
        this.client = new DefaultApi(new ApiClient());
        this.recipeQuery = {
            _number : 10,
        }
    }

    @action addRecipeQuery(k: string, v: any){
        this.recipeQuery[k] = v;
    }

}

export default FoodStore;