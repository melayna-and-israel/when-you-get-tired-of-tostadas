import {observable, action} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';

class FoodStore{

    client: DefaultApi;
    @observable dietType:string;
    @observable intolerances:string[];
    @observable dislikes:string;


    constructor(){
        this.client = new DefaultApi(new ApiClient());
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


}

export default FoodStore;