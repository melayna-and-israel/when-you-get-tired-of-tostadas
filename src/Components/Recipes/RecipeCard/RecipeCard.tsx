import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './RecipeCard.sass'

type RecipeCardProps = {
    recipeName : string,
    recipeImage: string,
}

class RecipeCard extends React.Component<RecipeCardProps>{
    render(){
        return (
            <Card className="card">
                <Card.Img variant="top" src={this.props.recipeImage} />
                <Card.Body>
                <Card.Title>{this.props.recipeName}</Card.Title>
                <Card.Text>
                    This is the summary of the recipe
                </Card.Text>
                <Button variant="primary">Visit recipe</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;