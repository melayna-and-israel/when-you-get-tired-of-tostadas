import React from 'react'

import Form from 'react-bootstrap/Form'

type Props = {
    updateRecipe: any;
    updateQuery: any;
    type: string;
}

type State = {
    cuisines: string[]
}

class Cuisines extends React.Component<Props, State>{
    static cuisines: string[] = [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
    ]

    constructor(props: Props){
        super(props);
        this.state = {
            cuisines: []
        }
        this.updateIntolerances = this.updateIntolerances.bind(this);
        this.renderCuisineForm = this.renderCuisineForm.bind(this);
    }

    updateIntolerances(event: any){
        let cuisines = this.state.cuisines;
        let selected: string = event.target.id.slice(3);

        //if item already selected, remove from list
        if(this.state.cuisines.includes(event.target.id)){
            cuisines = cuisines.filter( c => c !== selected)
        }
        else{
            cuisines.push(selected);
        }
        this.setState({
            cuisines: cuisines
        });

        this.props.updateQuery(cuisines);
        this.props.updateRecipe();
    }

    renderCuisineForm(){
        let cuisines:any = [];

        for(let i =0;i<Cuisines.cuisines.length;i++){
            cuisines.push(<Form.Check inline
                type="checkbox"
                id={this.props.type + Cuisines.cuisines[i]}
                key={i}
                label={Cuisines.cuisines[i]}
                onChange = {this.updateIntolerances}
                />);
        }
        return cuisines;
    }

    render(){
        return(
            <Form>
                {this.renderCuisineForm()}
            </Form>
        )
        
        
    }
}

export default Cuisines;