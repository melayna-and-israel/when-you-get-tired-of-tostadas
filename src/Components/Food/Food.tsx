import React from 'react';
import './food.sass';

import ApiClient from '../../Services/ApiClient'
import DefaultApi from '../../Services/com.spoonacular/DefaultApi';


class Food extends React.Component{
    client: DefaultApi;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.client = new DefaultApi(new ApiClient());
        // this.client.getRandomRecipes({limitLicense: true, tags: "chicken", _number: 1}, (error: any, data: any, response: any)=>{
        //     console.log(data);
        // });
    }

   render(){
       return (
        <p>More Food stuff goes here :))))))</p>
        
       );
   }
}

export default Food;