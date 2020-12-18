import React from "react"
import './Page.sass'

import FoodStore from '../../../Stores/FoodStore'

import RecipeCards from '../RecipeCards/RecipeCards'
import Slider from '../FilterSlider/Slider/Slider'

import ComplexSearch from '../../../Stores/complexSearch'
import {Container, Row, Col, } from "react-bootstrap"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import { values } from "mobx"

type PageProps = {
    foodStore: FoodStore;
}

type State = {
    recipes: any[]
    recipeQuery: ComplexSearch
    sort: String
}



class Page extends React.Component<PageProps, State>{
    foodStore: FoodStore;


    constructor(props: PageProps){
        super(props);
        this.foodStore = this.props.foodStore;
        this.state = {
            recipeQuery: this.props.foodStore.recipeQuery,
            recipes: [
                {"id":716426,"title":"Cauliflower, Brown Rice, and Vegetable Fried Rice","image":"https://spoonacular.com/recipeImages/716426-312x231.jpg","imageType":"jpg"},{"id":715594,"title":"Homemade Garlic and Basil French Fries","image":"https://spoonacular.com/recipeImages/715594-312x231.jpg","imageType":"jpg"},{"id":715497,"title":"Berry Banana Breakfast Smoothie","image":"https://spoonacular.com/recipeImages/715497-312x231.jpg","imageType":"jpg"},{"id":644387,"title":"Garlicky Kale","image":"https://spoonacular.com/recipeImages/644387-312x231.jpg","imageType":"jpg"},{"id":715392,"title":"Chicken Tortilla Soup (Slow Cooker)","image":"https://spoonacular.com/recipeImages/715392-312x231.jpg","imageType":"jpg"},{"id":716268,"title":"African Chicken Peanut Stew","image":"https://spoonacular.com/recipeImages/716268-312x231.jpg","imageType":"jpg"},{"id":716381,"title":"Nigerian Snail Stew","image":"https://spoonacular.com/recipeImages/716381-312x231.jpg","imageType":"jpg"},{"id":782601,"title":"Red Kidney Bean Jambalaya","image":"https://spoonacular.com/recipeImages/782601-312x231.jpg","imageType":"jpg"},{"id":794349,"title":"Broccoli and Chickpea Rice Salad","image":"https://spoonacular.com/recipeImages/794349-312x231.jpg","imageType":"jpg"},{"id":715446,"title":"Slow Cooker Beef Stew","image":"https://spoonacular.com/recipeImages/715446-312x231.jpg","imageType":"jpg"},{"id":715415,"title":"Red Lentil Soup with Chicken and Turnips","image":"https://spoonacular.com/recipeImages/715415-312x231.jpg","imageType":"jpg"},{"id":766453,"title":"Hummus and Za'atar","image":"https://spoonacular.com/recipeImages/766453-312x231.jpg","imageType":"jpg"},{"id":716627,"title":"Easy Homemade Rice and Beans","image":"https://spoonacular.com/recipeImages/716627-312x231.jpg","imageType":"jpg"},{"id":716408,"title":"Greek-Style Baked Fish: Fresh, Simple, and Delicious","image":"https://spoonacular.com/recipeImages/716408-312x231.jpg","imageType":"jpg"},{"id":795751,"title":"Chicken Fajita Stuffed Bell Pepper","image":"https://spoonacular.com/recipeImages/795751-312x231.jpg","imageType":"jpg"},{"id":640941,"title":"Crunchy Brussels Sprouts Side Dish","image":"https://spoonacular.com/recipeImages/640941-312x231.jpg","imageType":"jpg"},{"id":798400,"title":"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant","image":"https://spoonacular.com/recipeImages/798400-312x231.jpg","imageType":"jpg"},{"id":756814,"title":"Powerhouse Almond Matcha Superfood Smoothie","image":"https://spoonacular.com/recipeImages/756814-312x231.jpg","imageType":"jpg"},{"id":729366,"title":"Plantain Salad","image":"https://spoonacular.com/recipeImages/729366-312x231.jpg","imageType":"jpg"},{"id":715769,"title":"Broccolini Quinoa Pilaf","image":"https://spoonacular.com/recipeImages/715769-312x231.jpg","imageType":"jpg"},{"id":782600,"title":"Quinoa Salad with Vegetables and Cashews","image":"https://spoonacular.com/recipeImages/782600-312x231.jpg","imageType":"jpg"},{"id":642605,"title":"Farro With Mushrooms and Asparagus","image":"https://spoonacular.com/recipeImages/642605-312x231.jpg","imageType":"jpg"},{"id":715540,"title":"Summer Berry Salad","image":"https://spoonacular.com/recipeImages/715540-312x231.jpg","imageType":"jpg"},{"id":636589,"title":"Butternut Squash Frittata","image":"https://spoonacular.com/recipeImages/636589-312x231.jpg","imageType":"jpg"},{"id":640062,"title":"Corn Avocado Salsa","image":"https://spoonacular.com/recipeImages/640062-312x231.jpg","imageType":"jpg"},{"id":715495,"title":"Turkey Tomato Cheese Pizza","image":"https://spoonacular.com/recipeImages/715495-312x231.jpg","imageType":"jpg"},{"id":715421,"title":"Cheesy Chicken Enchilada Quinoa Casserole","image":"https://spoonacular.com/recipeImages/715421-312x231.jpg","imageType":"jpg"},{"id":716432,"title":"Finger Foods: Frittata Muffins #incredibleEGG","image":"https://spoonacular.com/recipeImages/716432-312x231.jpg","imageType":"jpg"},{"id":716437,"title":"Chilled Cucumber Avocado Soup with Yogurt and Kefir","image":"https://spoonacular.com/recipeImages/716437-312x231.jpg","imageType":"jpg"},{"id":639535,"title":"Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather","image":"https://spoonacular.com/recipeImages/639535-312x231.jpg","imageType":"jpg"},{"id":652417,"title":"Moroccan chickpea and lentil stew","image":"https://spoonacular.com/recipeImages/652417-312x231.jpg","imageType":"jpg"},{"id":794538,"title":"Almond Joy Protein Shake","image":"https://spoonacular.com/recipeImages/794538-312x231.jpg","imageType":"jpg"},{"id":648320,"title":"Jade Buddha Salmon Tartare","image":"https://spoonacular.com/recipeImages/648320-312x231.jpg","imageType":"jpg"},{"id":769774,"title":"Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)","image":"https://spoonacular.com/recipeImages/769774-312x231.jpg","imageType":"jpg"},{"id":649931,"title":"Lentil Salad With Vegetables","image":"https://spoonacular.com/recipeImages/649931-312x231.jpg","imageType":"jpg"},{"id":661925,"title":"Strawberry-Mango Quinoa Salad","image":"https://spoonacular.com/recipeImages/661925-312x231.jpg","imageType":"jpg"},{"id":660228,"title":"Skinny Kale Basil Pesto","image":"https://spoonacular.com/recipeImages/660228-312x231.jpg","imageType":"jpg"},{"id":715447,"title":"Easy Vegetable Beef Soup","image":"https://spoonacular.com/recipeImages/715447-312x231.jpg","imageType":"jpg"},{"id":715543,"title":"Homemade Guacamole","image":"https://spoonacular.com/recipeImages/715543-312x231.jpg","imageType":"jpg"},{"id":641975,"title":"Easy Ginger Beef Broccoli","image":"https://spoonacular.com/recipeImages/641975-312x231.jpg","imageType":"jpg"},{"id":652423,"title":"Moroccan Couscous and Chickpea Salad","image":"https://spoonacular.com/recipeImages/652423-312x231.jpg","imageType":"jpg"},{"id":660306,"title":"Slow Cooker: Pork and Garbanzo Beans","image":"https://spoonacular.com/recipeImages/660306-312x231.jpg","imageType":"jpg"},{"id":715424,"title":"The Best Chili","image":"https://spoonacular.com/recipeImages/715424-312x231.jpg","imageType":"jpg"},{"id":662670,"title":"Swiss Chard Wraps","image":"https://spoonacular.com/recipeImages/662670-312x231.jpg","imageType":"jpg"},{"id":716195,"title":"Spicy Indian-Style Hummus","image":"https://spoonacular.com/recipeImages/716195-312x231.jpg","imageType":"jpg"},{"id":663559,"title":"Tomato and lentil soup","image":"https://spoonacular.com/recipeImages/663559-312x231.jpg","imageType":"jpg"},{"id":633942,"title":"Balsamic Roasted Vegetables","image":"https://spoonacular.com/recipeImages/633942-312x231.jpg","imageType":"jpg"},{"id":715521,"title":"Turkey Avocado BLT Salad","image":"https://spoonacular.com/recipeImages/715521-312x231.jpg","imageType":"jpg"},{"id":716276,"title":"Doughnuts","image":"https://spoonacular.com/recipeImages/716276-312x231.jpg","imageType":"jpg"},//{"id":658509,"title":"Roasted Broccoli with Lemon and Garlic","image":"https://spoonacular.com/recipeImages/658509-312x231.jpg","imageType":"jpg"}
            ],
            sort: ""
        }
        this.setState(this.state);

        //make a call to the api
        this.updateRecipes = this.updateRecipes.bind(this);
        this.renderRecipes = this.renderRecipes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateRecipes();
    }

    useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        },
        selectEmpty: {
        marginTop: theme.spacing(2),
        },
    }),
    );

    componentDidMount(){
        document.title = ("Recipes");
    }

    //makes a call to the api
    updateRecipes(){
        console.log(this.foodStore.recipeQuery);
        console.log(this.foodStore.params);
        this.foodStore.client.searchRecipes(this.foodStore.params, this.foodStore.recipeQuery, (error: any, data: any)=>{
            console.log(data);
            if(data){
                this.setState({recipes: data.results});
            }
        })
    }

    renderRecipes(){
        if(this.state.recipes){
            return (
                <RecipeCards 
                buttonText="Add To Meal Plan"
                buttonFunc={(id: number, recipe: any)=>this.props.foodStore.addMealToMealPlan(id, recipe)}
                foodStore={this.foodStore} 
                recipes={this.state.recipes}></RecipeCards>
            )
        }
    }

    handleChange(event: any){
        console.log(event.target.value);
        this.setState({
            sort : event.target.value
        })

        if(event.target.value === "Calories: High-Low"){
            this.props.foodStore.updateSort("calories", "desc");
        }
        else if(event.target.value === "Calories: Low-High"){
            this.props.foodStore.updateSort("calories", "asc");
        }
        else if(event.target.value === "Popularity: High-Low"){
            this.props.foodStore.updateSort("popularity", "desc");
        }
        else if(event.target.value === "Popularity: Low-High"){
            this.props.foodStore.updateSort("popularity", "asc");
        }
        this.updateRecipes();
    }
    
    render(){
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col lg={{ span: 1, offset: 10}}>
                        <FormControl style={{
                            minWidth: 200,
                            minHeight: 60
                            }}>
                            <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={this.state.sort}
                                onChange={this.handleChange}
                                >
                                <MenuItem value={"Calories: High-Low"}>Calories: High-Low</MenuItem>
                                <MenuItem value={"Calories: Low-High"}>Calories: Low-High</MenuItem>
                                <MenuItem value={"Popularity: High-Low"}>Popularity: High-Low</MenuItem>
                                <MenuItem value={"Popularity: Low-High"}>Popularity: Low-High</MenuItem>
                            </Select>
                        </FormControl>
                        </Col>
                    
                    </Row>
                    <Row>
                        <Col lg="3">
                            <Slider updateRecipe={this.updateRecipes} foodStore={this.foodStore}></Slider>
                        </Col>
                        <Col xs="10" lg="9">
                            
                            <Row>{this.renderRecipes()}</Row>
                            
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div>
            
        )
    }
}

export default Page;