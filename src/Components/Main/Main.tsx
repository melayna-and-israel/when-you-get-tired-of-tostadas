import React from 'react'
import './main.sass';
import FoodStore from '../../Stores/FoodStore'
import Food from '../Food/Food';

import Dropdown from 'react-bootstrap/Dropdown';

import DropdownMenu from 'react-bootstrap/Button';
import DropdownToggle from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/Button';


import DropdownItem from 'react-bootstrap/Button';

class Main extends React.Component{
    store: FoodStore;

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.store = new FoodStore();
    }
    render(){
        const handleSelect=(e:any)=>{
            console.log(e);
          }
        return(
            <div>
                <p>This is the Main page</p>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Diet Preference
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Vegan">Vegan</Dropdown.Item>
                        <Dropdown.Item eventKey="Vegetarian">Vegetarian</Dropdown.Item>
                        <Dropdown.Item eventKey="Pescatarian">Pescatarian</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    
            </div>
        )
    }
}

export default Main;