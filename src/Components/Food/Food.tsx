import React from 'react';
import './food.sass';

import ApiClient from '../../Services/ApiClient'
import DefaultApi from '../../Services/com.spoonacular/DefaultApi';


class Food extends React.Component{
    client: DefaultApi;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.client = new DefaultApi(new ApiClient());
        console.log(this.client.searchRecipes("pasta", {cuisine: "italian"}, console.log));
    }

   render(){
       return (
        <p>Food stuff goes here</p>
       );
   }
}

export default Food;