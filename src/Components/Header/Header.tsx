import React from 'react'
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
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

    search(){
        this.foodStore.updateParams(this.state.searchFor);
        this.foodStore.clearQuery();
        
    }

    updateSearchSelect(event: any){
        this.setState({
            searchFor: event.target.value
        });
    }

    render(){
        return (
            <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
                <Navbar.Brand href="#home">Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Nav.Link href="#link">Meal Plan</Nav.Link>
                    <Nav.Link href="#link">Grocery List</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" onChange={this.updateSearchSelect}/>
                        <Button variant="outline-light" onClick={this.search} href="/recipes">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;