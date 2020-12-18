import React from 'react'
import './main.sass';
import FoodStore from '../../Stores/FoodStore'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


interface IState {
    dietType: string;
    intolerances:string[];
    dislikes:string;
  }


type PageProps = {
    foodStore: FoodStore;
}

//Component for Building Diet Profile
class Main extends React.Component<PageProps, IState>{
    foodStore:FoodStore;
 
    textInput:any;
    intolerances = ['dairy', 'egg', 'soy', 'sulfite', 'gluten', 'grain', 'peanut', 'seafood', 'tree nut', 'wheat', 'sesame', 'shellfish'];
    constructor(props: PageProps){
        super(props);
        this.foodStore = props.foodStore;
        this.state={
            dietType : "No Diet Restriction",
            intolerances:[],
            dislikes: ""
        }
        this.textInput = React.createRef(); 
    }

    componentDidMount(){
        document.title = "Build Diet Profile"
      }


    //Updates the display of a user's diet preference
    renderDietPreference (){
        return(
            <p className="dietPref">Diet Preference: {this.state.dietType}</p>
        )              
      }


    
    render(){
        const handleSelect=(e:any)=>{
            console.log(e);
            this.setState({
                dietType:e
            }) 
          }
        
        //Updating the state with user dislikes upon change
        const editDislikes = (event:any)=>{
            this.setState({
                dislikes:this.textInput.current.value
            })
        }
        
        //Updating the state with intolerances upon change
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

        //Saves the user's inputted data to the food store
        const saveData = ()=>{
            this.foodStore.updateDietType(this.state.dietType);
            this.foodStore.updateIntolerances(this.state.intolerances);
            this.foodStore.updateDislikes(this.textInput.current.value);
            this.foodStore.addRecipeQuery("intolerances", this.state.intolerances.join(","));
            this.foodStore.addRecipeQuery("diet", this.state.dietType);
            this.foodStore.addRecipeQuery("excludeIngredients", this.state.dislikes);
            console.log(this.foodStore.recipeQuery);
            
        }

        //Creates a row of checkboxes
        const renderCheckBoxRow = () =>{
            let intoleranceslist = []
            let cols: number = 6;
            for(let j = 0;j<Math.ceil(this.intolerances.length/cols);j++){
                intoleranceslist.push(
                    <Row key={j} lg="6" md="3">{renderCheckBox(cols, j)}</Row>
                );
            }
            return intoleranceslist;
        }

        //Creates a checkbox for each intolerance
        const renderCheckBox = (cols: number, row: number) =>{
            let intoleranceBoxes = []
            let i = 0;
           
            for(let i = 0;i<cols;i++){
                if(cols*row +i < this.intolerances.length){
                    let intolerance = this.intolerances[cols*row +i];
                    console.log(intolerance);
                    intoleranceBoxes.push(
                        <Col key={cols*row +i}>
                            <Form.Check type="checkbox" id={intolerance} label={intolerance} onChange={editIntolerances}></Form.Check>
                        </Col>
                    )
                }
            }
            return intoleranceBoxes;
        }

        return(
            
            <div>
                <Container>
                <Row className="justify-content-md-center mainTitle">
                    <p>Build Your Diet Profile</p>
                </Row>
                
                <Dropdown onSelect={handleSelect} className="dietToggle">
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
                    {renderCheckBoxRow()}

                    
                    <Form.Label className="dislikes">What ingredients do you not like?</Form.Label>
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