import {observable} from "mobx";

import ApiClient from '../Services/ApiClient'
import DefaultApi from '../Services/com.spoonacular/DefaultApi';

class FoodStore{
    client: DefaultApi;

    constructor(){
        this.client = new DefaultApi(new ApiClient());
    }

}

export default FoodStore;