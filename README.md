Troubleshooting

Cannot use JSX unless the '--jsx' flag is provided:
https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided

Error: Node Sass version 5.0.0 is incompatible with ^4.0.0:
https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0


API Reference: https://spoonacular.com/food-api

How to run the project: run "npm start" in the terminal

1. Building Your Diet Profile

You will be told to build your diet profile once you begin the web app. 
The user can select a diet profile if it pertains to you. If you don't have a restricted diet you don't have to select an option.
The user can also check what intolerances they may have as well as input any ingredients that they dislike. 
Everything that the user selects will be taken into account when querying recipes for the user.
Once the user presses save, the information is saved to the date store and the user is taken to the recipes page. 


2. Search For Meals

The recipes page displays a grid of a random collection of recipes based on a user's diet profile. Each recipe will display its title and image. There is a filters panel to the left/top of the page for a user filter recipes based on cuisine type and cook time. When the user adds a new filter, a new request is made to the API with updated queries and the grid is updated with the new recipes. 

A sort feature is implemented on the recipes page, so that users can sort the recipes displayed based on popularity and calories. 
Clicking on a recipe will redirect the user to that recipe's individual page to provide further information. 
The "Add to Meal Plan" button will add the recipe to the user's meal plan.

3. Individual Recipe Page
Clicking on a recipe redirects the user to a individual recipe page. There displays further details, ingredients, and instructions. 

3. Build A Meal Plan

Users can create a meal plan for their day. Recipes can be added to the meal plan from the recipes list or recipe page.

4. Create a Grocery List
If a user is creating a meal plan, pull all the ingredients from the recipes being used into one grocery list.


Things to Note:

On our recipes page, though we would love to show more than 10, we had to limit our number due to the low quota of the API. We did this to ensure if wouldn't max out for a user to go through a whole flow of using the web app. 