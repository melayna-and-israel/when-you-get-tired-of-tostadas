import React from "react"
import Button from 'react-bootstrap/Button'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Page.sass'

import FoodStore from '../../../Stores/FoodStore'

import RecipeCards from '../RecipeCard/RecipeCard'

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
        this.getRecipes = this.getRecipes.bind(this);
        this.renderRecipes = this.renderRecipes.bind(this);
        this.state = {
            recipes: [
            ]
        };
        this.setState(this.state);
        this.foodStore.client.searchRecipes("", this.foodStore.recipeQuery, (error: any, data: any)=>{
            console.log(data.results);
            this.setState({recipes: data.results});
        })
    }

    getRecipes(){
        // this.foodStore.addRecipeQuery("cuisine", "mexican");
        
    }

    renderRecipes(){
        let recipesList = [];
        for(let i =0;i<this.state.recipes.length;i++){
            let recipe = this.state.recipes[i];
            recipesList.push(<RecipeCards key={i} recipeName={recipe.title} recipeImage={recipe.image}></RecipeCards>)
        }

        return recipesList;
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
                        <Col xs="10" lg="9">
                            {this.renderRecipes()}
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div>
            
        )
    }
}

export default Page;