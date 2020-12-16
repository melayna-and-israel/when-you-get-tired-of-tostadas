import React from 'react'
import './main.sass';
import FoodStore from '../../Stores/FoodStore'
// import Food from '../Food/Food';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


// import DropdownMenu from 'react-bootstrap/Button';
// import DropdownToggle from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/Button';


import DropdownItem from 'react-bootstrap/Button';
interface IState {
    dietType: string;
    intolerances:string[];
    dislikes:string;
  }


type PageProps = {
    foodStore: FoodStore;
}

// const TITLE = "Build Diet Profile"

class Main extends React.Component<PageProps, IState>{
    foodStore:FoodStore;
    // textInput:React.RefObject<HTMLInputElement>;
    textInput:any;

    constructor(props: PageProps){
        super(props);
        this.foodStore = props.foodStore;
        this.state={
            dietType : this.foodStore.dietType,
            intolerances:[],
            dislikes: ""
        }
        this.textInput = React.createRef(); 
    }
    componentDidMount(){
        document.title = "Build Diet Profile"
      }

    // componentDidUpdate(prevPops: PageProps) {
       
    // }

    renderDietPreference (){
        return(
            <p>Diet Preference: {this.state.dietType}</p>
        )              
      }


    
    render(){
        const handleSelect=(e:any)=>{
            console.log(e);
            this.setState({
                dietType:e
            }) 
          }

        const editDislikes = (event:any)=>{
            this.setState({
                dislikes:this.textInput.current.value
            })
        }
        const editIntolerances=(event:any)=>{
            let intolerances = this.state.intolerances;
            if (this.state.intolerances.includes(event.target.id)){
                let index = this.state.intolerances.indexOf(event.target.id);
                intolerances.splice(index, 1);
                console.log("in the list and taking it out");
                
            }
            else{
                
                intolerances.push(event.target.id);
            }
            console.log(intolerances);
            this.setState({
                intolerances:intolerances
            })
        }

        
        const saveData = ()=>{
            this.foodStore.updateDietType(this.state.dietType);
            console.log(this.foodStore.dietType);
            this.foodStore.updateIntolerances(this.state.intolerances);
            this.foodStore.updateDislikes(this.textInput.current.value);
            
        }

        return(
            
            <div>
                <Container>
                <Row className="justify-content-md-center mainTitle">
                    <p>Build Your Diet Profile</p>
                </Row>
                
                <Dropdown onSelect={handleSelect} >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Diet Preference
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item eventKey="Vegan">Vegan</Dropdown.Item>
                        <Dropdown.Item eventKey="Vegetarian">Vegetarian</Dropdown.Item>
                        <Dropdown.Item eventKey="Pescatarian">Pescatarian</Dropdown.Item>
                        <Dropdown.Item eventKey="Gluten Free">Gluten Free</Dropdown.Item>
                        <Dropdown.Item eventKey="Ketogenic">Ketogenic</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div>
                    {this.renderDietPreference()}
                </div>

                <Form>
                <Form.Group>
                <Form.Label>Select any intolerances:</Form.Label>
                <Row> 
                    <Form.Check inline
                        type="checkbox"
                        id="dairy"
                        label="dairy"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                   
                    <Form.Check inline
                        type="checkbox"
                        id="egg"
                        label="egg"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                   
                    <Form.Check inline
                        type="checkbox"
                        id="gluten"
                        label="gluten"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                   
                    <Form.Check inline
                        type="checkbox"
                        id="grain"
                        label="grain"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="peanut"
                        label="peanut"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="seafood"
                        label="seafood"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                </Row>
                <Row>
                    <Form.Check inline
                        type="checkbox"
                        id="sesame"
                        label="sesame"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="shellfish"
                        label="shellfish"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="soy"
                        label="soy"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="sulfite"
                        label="sulfite"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="tree nut"
                        label="tree nut"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                    <Form.Check inline
                        type="checkbox"
                        id="wheat"
                        label="wheat"
                        // checked={this.state.peanuts}
                        onChange={editIntolerances} />
                </Row>
                    
                    <Form.Label>What ingredients do you not like?</Form.Label>
                    <Form.Control type="ingredients" placeholder="Enter ingredients separated by commas" onChange={editDislikes} ref ={this.textInput} />
                    <Form.Text className="text-muted">
                     Ex: mushrooms, olives, etc.
                    </Form.Text>
                </Form.Group>
                
                </Form>
               
                <div>
                    <button onClick = {saveData}>Save</button>
                </div>

                </Container>
                
                    
            </div>
            
        )
    }
}

export default Main;