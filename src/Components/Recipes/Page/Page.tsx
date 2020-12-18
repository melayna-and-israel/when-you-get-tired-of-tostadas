import React from "react"
import Button from 'react-bootstrap/Button'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Page.sass'

import FoodStore from '../../../Stores/FoodStore'

import RecipeCards from '../RecipeCards/RecipeCards'

type PageProps = {
    foodStore: FoodStore;
}

type State = {
    recipes: any[]
}

class Page extends React.Component<PageProps, State>{
    private foodStore: FoodStore;
    opts: Object = {};


    constructor(props: PageProps){
        super(props);
        this.foodStore = props.foodStore;
        this.state = {
            recipes: [
                {"id":716426,"title":"Cauliflower, Brown Rice, and Vegetable Fried Rice","image":"https://spoonacular.com/recipeImages/716426-312x231.jpg","imageType":"jpg"},{"id":715594,"title":"Homemade Garlic and Basil French Fries","image":"https://spoonacular.com/recipeImages/715594-312x231.jpg","imageType":"jpg"},{"id":715497,"title":"Berry Banana Breakfast Smoothie","image":"https://spoonacular.com/recipeImages/715497-312x231.jpg","imageType":"jpg"},{"id":644387,"title":"Garlicky Kale","image":"https://spoonacular.com/recipeImages/644387-312x231.jpg","imageType":"jpg"},{"id":715392,"title":"Chicken Tortilla Soup (Slow Cooker)","image":"https://spoonacular.com/recipeImages/715392-312x231.jpg","imageType":"jpg"},{"id":716268,"title":"African Chicken Peanut Stew","image":"https://spoonacular.com/recipeImages/716268-312x231.jpg","imageType":"jpg"},{"id":716381,"title":"Nigerian Snail Stew","image":"https://spoonacular.com/recipeImages/716381-312x231.jpg","imageType":"jpg"},{"id":782601,"title":"Red Kidney Bean Jambalaya","image":"https://spoonacular.com/recipeImages/782601-312x231.jpg","imageType":"jpg"},{"id":794349,"title":"Broccoli and Chickpea Rice Salad","image":"https://spoonacular.com/recipeImages/794349-312x231.jpg","imageType":"jpg"},{"id":715446,"title":"Slow Cooker Beef Stew","image":"https://spoonacular.com/recipeImages/715446-312x231.jpg","imageType":"jpg"},{"id":715415,"title":"Red Lentil Soup with Chicken and Turnips","image":"https://spoonacular.com/recipeImages/715415-312x231.jpg","imageType":"jpg"},{"id":766453,"title":"Hummus and Za'atar","image":"https://spoonacular.com/recipeImages/766453-312x231.jpg","imageType":"jpg"},{"id":716627,"title":"Easy Homemade Rice and Beans","image":"https://spoonacular.com/recipeImages/716627-312x231.jpg","imageType":"jpg"},{"id":716408,"title":"Greek-Style Baked Fish: Fresh, Simple, and Delicious","image":"https://spoonacular.com/recipeImages/716408-312x231.jpg","imageType":"jpg"},{"id":795751,"title":"Chicken Fajita Stuffed Bell Pepper","image":"https://spoonacular.com/recipeImages/795751-312x231.jpg","imageType":"jpg"},{"id":640941,"title":"Crunchy Brussels Sprouts Side Dish","image":"https://spoonacular.com/recipeImages/640941-312x231.jpg","imageType":"jpg"},{"id":798400,"title":"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant","image":"https://spoonacular.com/recipeImages/798400-312x231.jpg","imageType":"jpg"},{"id":756814,"title":"Powerhouse Almond Matcha Superfood Smoothie","image":"https://spoonacular.com/recipeImages/756814-312x231.jpg","imageType":"jpg"},{"id":729366,"title":"Plantain Salad","image":"https://spoonacular.com/recipeImages/729366-312x231.jpg","imageType":"jpg"},{"id":715769,"title":"Broccolini Quinoa Pilaf","image":"https://spoonacular.com/recipeImages/715769-312x231.jpg","imageType":"jpg"},{"id":782600,"title":"Quinoa Salad with Vegetables and Cashews","image":"https://spoonacular.com/recipeImages/782600-312x231.jpg","imageType":"jpg"},{"id":642605,"title":"Farro With Mushrooms and Asparagus","image":"https://spoonacular.com/recipeImages/642605-312x231.jpg","imageType":"jpg"},{"id":715540,"title":"Summer Berry Salad","image":"https://spoonacular.com/recipeImages/715540-312x231.jpg","imageType":"jpg"},{"id":636589,"title":"Butternut Squash Frittata","image":"https://spoonacular.com/recipeImages/636589-312x231.jpg","imageType":"jpg"},{"id":640062,"title":"Corn Avocado Salsa","image":"https://spoonacular.com/recipeImages/640062-312x231.jpg","imageType":"jpg"},{"id":715495,"title":"Turkey Tomato Cheese Pizza","image":"https://spoonacular.com/recipeImages/715495-312x231.jpg","imageType":"jpg"},{"id":715421,"title":"Cheesy Chicken Enchilada Quinoa Casserole","image":"https://spoonacular.com/recipeImages/715421-312x231.jpg","imageType":"jpg"},{"id":716432,"title":"Finger Foods: Frittata Muffins #incredibleEGG","image":"https://spoonacular.com/recipeImages/716432-312x231.jpg","imageType":"jpg"},{"id":716437,"title":"Chilled Cucumber Avocado Soup with Yogurt and Kefir","image":"https://spoonacular.com/recipeImages/716437-312x231.jpg","imageType":"jpg"},{"id":639535,"title":"Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather","image":"https://spoonacular.com/recipeImages/639535-312x231.jpg","imageType":"jpg"},{"id":652417,"title":"Moroccan chickpea and lentil stew","image":"https://spoonacular.com/recipeImages/652417-312x231.jpg","imageType":"jpg"},{"id":794538,"title":"Almond Joy Protein Shake","image":"https://spoonacular.com/recipeImages/794538-312x231.jpg","imageType":"jpg"},{"id":648320,"title":"Jade Buddha Salmon Tartare","image":"https://spoonacular.com/recipeImages/648320-312x231.jpg","imageType":"jpg"},{"id":769774,"title":"Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)","image":"https://spoonacular.com/recipeImages/769774-312x231.jpg","imageType":"jpg"},{"id":649931,"title":"Lentil Salad With Vegetables","image":"https://spoonacular.com/recipeImages/649931-312x231.jpg","imageType":"jpg"},{"id":661925,"title":"Strawberry-Mango Quinoa Salad","image":"https://spoonacular.com/recipeImages/661925-312x231.jpg","imageType":"jpg"},{"id":660228,"title":"Skinny Kale Basil Pesto","image":"https://spoonacular.com/recipeImages/660228-312x231.jpg","imageType":"jpg"},{"id":715447,"title":"Easy Vegetable Beef Soup","image":"https://spoonacular.com/recipeImages/715447-312x231.jpg","imageType":"jpg"},{"id":715543,"title":"Homemade Guacamole","image":"https://spoonacular.com/recipeImages/715543-312x231.jpg","imageType":"jpg"},{"id":641975,"title":"Easy Ginger Beef Broccoli","image":"https://spoonacular.com/recipeImages/641975-312x231.jpg","imageType":"jpg"},{"id":652423,"title":"Moroccan Couscous and Chickpea Salad","image":"https://spoonacular.com/recipeImages/652423-312x231.jpg","imageType":"jpg"},{"id":660306,"title":"Slow Cooker: Pork and Garbanzo Beans","image":"https://spoonacular.com/recipeImages/660306-312x231.jpg","imageType":"jpg"},{"id":715424,"title":"The Best Chili","image":"https://spoonacular.com/recipeImages/715424-312x231.jpg","imageType":"jpg"},{"id":662670,"title":"Swiss Chard Wraps","image":"https://spoonacular.com/recipeImages/662670-312x231.jpg","imageType":"jpg"},{"id":716195,"title":"Spicy Indian-Style Hummus","image":"https://spoonacular.com/recipeImages/716195-312x231.jpg","imageType":"jpg"},{"id":663559,"title":"Tomato and lentil soup","image":"https://spoonacular.com/recipeImages/663559-312x231.jpg","imageType":"jpg"},{"id":633942,"title":"Balsamic Roasted Vegetables","image":"https://spoonacular.com/recipeImages/633942-312x231.jpg","imageType":"jpg"},{"id":715521,"title":"Turkey Avocado BLT Salad","image":"https://spoonacular.com/recipeImages/715521-312x231.jpg","imageType":"jpg"},{"id":716276,"title":"Doughnuts","image":"https://spoonacular.com/recipeImages/716276-312x231.jpg","imageType":"jpg"},//{"id":658509,"title":"Roasted Broccoli with Lemon and Garlic","image":"https://spoonacular.com/recipeImages/658509-312x231.jpg","imageType":"jpg"}
            ]
        }
        this.setState(this.state);

        //makes a call to the api
        // this.foodStore.client.searchRecipes("", this.foodStore.recipeQuery, (error: any, data: any)=>{
        //     console.log(data);
        //     if(data){
        //         this.setState({recipes: data.results});
        //     }
            
        // })
        this.renderRecipes = this.renderRecipes.bind(this);
    }

    renderRecipes(){
        if(this.state.recipes){
            return (
                <RecipeCards recipes={this.state.recipes}></RecipeCards>
            )
        }
    }

    
    render(){

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                            <ProSidebar>
                                <Menu iconShape="square">
                                    <MenuItem >Dashboard</MenuItem>
                                    <SubMenu title="Components">
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    </SubMenu>
                                </Menu>
                            </ProSidebar>
                        </Col>
                        <Col xs="10" lg="10">
                            {this.renderRecipes()}
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div>
            
        )
    }
}

export default Page;