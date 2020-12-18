import React from 'react'
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FoodStore from '../../Stores/FoodStore';

type Props = {
    foodStore : FoodStore
}

type State ={
    searchFor: string
}

class Header extends React.Component<Props, State>{
    foodStore: FoodStore;

    constructor(props: Props){
        super(props);
        this.foodStore = this.props.foodStore;
        this.search = this.search.bind(this);
        this.updateSearchSelect = this.updateSearchSelect.bind(this);
        this.state = {
            searchFor: ""
        };
        this.setState(this.state);
    }

    //monitors changes in the search bar
    search(){
        this.foodStore.updateParams(this.state.searchFor);
        this.foodStore.clearQuery();
    }

    //updates search parameters and 
    updateSearchSelect(event: any){
        this.setState({
            searchFor: event.target.value
        });
    }

    //renders the navbar
    render(){
        return (
            <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
                <Navbar.Brand href="#home">Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/recipes">Recipes</Link>
                        <Link className="nav-link" to="/mealplan">Meal Plan</Link>
                        {/* <Link className="nav-link" to="/groceries">Grocery List</Link> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" onChange={this.updateSearchSelect}/>
                        <Link className="nav-link" to="/recipes" onClick={this.search}>
                            <Button variant="outline-light" >Search</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;