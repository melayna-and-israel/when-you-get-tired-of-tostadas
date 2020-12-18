import React from "react"

import FoodStore from '../../../Stores/FoodStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/esm/Card";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import './Page.sass';


type PageProps = {
    foodStore: FoodStore;
}

type IState = {
    recipeInfo: any
    // recipeNutrition: any
}


class Page extends React.Component<PageProps, IState>{
    private foodStore: FoodStore;
    recipeID: number;
    recipeInfo:any;
    recipeNutrition:any;
    recipeInstructions:any;

    constructor(props:any){
        super(props);
        this.foodStore = props.foodStore;
        let url = new URL(window.location.href);
        this.recipeID = parseInt(url.pathname.split('/')[2],10);
        this.renderInstructions = this.renderInstructions.bind(this);
        this.renderIngredients = this.renderIngredients.bind(this);
        this.state = {
            recipeInfo: {}
        }
        this.setState(this.state);

        this.getRecipeInfo();

        
        this.recipeInstructions = [
            {
                "name": "",
                "steps": [
                    {
                        "equipment": [
                            {
                                "id": 404784,
                                "image": "oven.jpg",
                                "name": "oven",
                                "temperature": {
                                    "number": 200.0,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ],
                        "ingredients": [],
                        "number": 1,
                        "step": "Preheat the oven to 200 degrees F."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404661,
                                "image": "whisk.png",
                                "name": "whisk"
                            },
                            {
                                "id": 404783,
                                "image": "bowl.jpg",
                                "name": "bowl"
                            }
                        ],
                        "ingredients": [
                            {
                                "id": 19334,
                                "image": "light-brown-sugar.jpg",
                                "name": "light brown sugar"
                            },
                            {
                                "id": 19335,
                                "image": "sugar-in-bowl.png",
                                "name": "granulated sugar"
                            },
                            {
                                "id": 18371,
                                "image": "white-powder.jpg",
                                "name": "baking powder"
                            },
                            {
                                "id": 18372,
                                "image": "white-powder.jpg",
                                "name": "baking soda"
                            },
                            {
                                "id": 12142,
                                "image": "pecans.jpg",
                                "name": "pecans"
                            },
                            {
                                "id": 20081,
                                "image": "flour.png",
                                "name": "all purpose flour"
                            },
                            {
                                "id": 2047,
                                "image": "salt.jpg",
                                "name": "salt"
                            }
                        ],
                        "number": 2,
                        "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404661,
                                "image": "whisk.png",
                                "name": "whisk"
                            },
                            {
                                "id": 404783,
                                "image": "bowl.jpg",
                                "name": "bowl"
                            }
                        ],
                        "ingredients": [
                            {
                                "id": 2050,
                                "image": "vanilla-extract.jpg",
                                "name": "vanilla extract"
                            },
                            {
                                "id": 93622,
                                "image": "vanilla.jpg",
                                "name": "vanilla bean"
                            },
                            {
                                "id": 1230,
                                "image": "buttermilk.jpg",
                                "name": "buttermilk"
                            },
                            {
                                "id": 1123,
                                "image": "egg.png",
                                "name": "egg"
                            }
                        ],
                        "number": 3,
                        "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
                    },
                    {
                        "equipment": [],
                        "ingredients": [
                            {
                                "id": 1123,
                                "image": "egg.png",
                                "name": "egg"
                            }
                        ],
                        "number": 4,
                        "step": "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix."
                    },
                    {
                        "equipment": [],
                        "ingredients": [],
                        "length": {
                            "number": 15,
                            "unit": "minutes"
                        },
                        "number": 5,
                        "step": "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404779,
                                "image": "griddle.jpg",
                                "name": "griddle"
                            },
                            {
                                "id": 404645,
                                "image": "pan.png",
                                "name": "frying pan"
                            }
                        ],
                        "ingredients": [],
                        "length": {
                            "number": 3,
                            "unit": "minutes"
                        },
                        "number": 6,
                        "step": "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404784,
                                "image": "oven.jpg",
                                "name": "oven",
                                "temperature": {
                                    "number": 200.0,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ],
                        "ingredients": [],
                        "number": 7,
                        "step": "Transfer the pancakes to a platter and keep warm in a 200 degree F oven."
                    },
                    {
                        "equipment": [],
                        "ingredients": [
                            {
                                "id": 10014037,
                                "image": "bourbon.png",
                                "name": "bourbon"
                            }
                        ],
                        "number": 8,
                        "step": "Serve 6 pancakes per person, top each with some of the bourbon butter."
                    },
                    {
                        "equipment": [],
                        "ingredients": [
                            {
                                "id": 19336,
                                "image": "powdered-sugar.jpg",
                                "name": "powdered sugar"
                            },
                            {
                                "id": 19911,
                                "image": "maple-syrup.png",
                                "name": "maple syrup"
                            }
                        ],
                        "number": 9,
                        "step": "Drizzle with warm maple syrup and dust with confectioners' sugar."
                    },
                    {
                        "equipment": [],
                        "ingredients": [
                            {
                                "id": 12142,
                                "image": "pecans.jpg",
                                "name": "pecans"
                            }
                        ],
                        "number": 10,
                        "step": "Garnish with fresh mint sprigs and more toasted pecans, if desired."
                    }
                ]
            },
            {
                "name": "Bourbon Molasses Butter",
                "steps": [
                    {
                        "equipment": [
                            {
                                "id": 404669,
                                "image": "sauce-pan.jpg",
                                "name": "sauce pan"
                            }
                        ],
                        "ingredients": [
                            {
                                "id": 10014037,
                                "image": "bourbon.png",
                                "name": "bourbon"
                            },
                            {
                                "id": 19335,
                                "image": "sugar-in-bowl.png",
                                "name": "sugar"
                            }
                        ],
                        "number": 1,
                        "step": "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404771,
                                "image": "food-processor.png",
                                "name": "food processor"
                            }
                        ],
                        "ingredients": [
                            {
                                "id": 19304,
                                "image": "molasses.jpg",
                                "name": "molasses"
                            },
                            {
                                "id": 10014037,
                                "image": "bourbon.png",
                                "name": "bourbon"
                            },
                            {
                                "id": 2047,
                                "image": "salt.jpg",
                                "name": "salt"
                            }
                        ],
                        "number": 2,
                        "step": "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth."
                    },
                    {
                        "equipment": [
                            {
                                "id": 404730,
                                "image": "plastic-wrap.jpg",
                                "name": "plastic wrap"
                            },
                            {
                                "id": 404783,
                                "image": "bowl.jpg",
                                "name": "bowl"
                            }
                        ],
                        "ingredients": [],
                        "number": 3,
                        "step": "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld."
                    },
                    {
                        "equipment": [],
                        "ingredients": [],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        },
                        "number": 4,
                        "step": "Remove from the refrigerator about 30 minutes before using to soften."
                    }
                ]
            }
        ]
        
        
        // this.foodStore.client.getRecipeInformation(this.recipeID, {includeNutrition:true}, (error: any, data: any)=>{
        //     console.log(data);
        //     console.log(data.image);
        //     this.recipeInfo = data;
        //     if(data){
        //         this.setState({recipeInfo: data});
        //     }
            
        // })
        // this.foodStore.client.getAnalyzedRecipeInstructions(this.recipeID, {stepBreakdown: true}, (error: any, data: any)=>{
        //     console.log(data);
        //     // if(data){
        //     //     this.setState({recipes: data.results});
        //     // }
            
        // })
        this.recipeNutrition = {
            "calories": "316",
            "carbs": "49g",
            "fat": "12g",
            "protein": "3g",
            "bad": [
                {
                    "amount": "316",
                    "indented": false,
                    "percentOfDailyNeeds": 15.84,
                    "title": "Calories"
                },
                {
                    "amount": "12g",
                    "indented": false,
                    "percentOfDailyNeeds": 18.51,
                    "title": "Fat"
                },
                {
                    "amount": "3g",
                    "indented": true,
                    "percentOfDailyNeeds": 24.88,
                    "title": "Saturated Fat"
                },
                {
                    "amount": "49g",
                    "indented": false,
                    "percentOfDailyNeeds": 16.44,
                    "title": "Carbohydrates"
                },
                {
                    "amount": "21g",
                    "indented": true,
                    "percentOfDailyNeeds": 24.42,
                    "title": "Sugar"
                },
                {
                    "amount": "1mg",
                    "indented": false,
                    "percentOfDailyNeeds": 0.63,
                    "title": "Cholesterol"
                },
                {
                    "amount": "279mg",
                    "indented": false,
                    "percentOfDailyNeeds": 12.13,
                    "title": "Sodium"
                }
            ],
            "good": [
                {
                    "amount": "3g",
                    "indented": false,
                    "percentOfDailyNeeds": 7.57,
                    "title": "Protein"
                },
                {
                    "amount": "19\u00b5g",
                    "indented": false,
                    "percentOfDailyNeeds": 18.76,
                    "title": "Vitamin K"
                },
                {
                    "amount": "0.37mg",
                    "indented": false,
                    "percentOfDailyNeeds": 18.69,
                    "title": "Manganese"
                },
                {
                    "amount": "0.15mg",
                    "indented": false,
                    "percentOfDailyNeeds": 10.02,
                    "title": "Vitamin B1"
                },
                {
                    "amount": "2g",
                    "indented": false,
                    "percentOfDailyNeeds": 9.97,
                    "title": "Fiber"
                },
                {
                    "amount": "37\u00b5g",
                    "indented": false,
                    "percentOfDailyNeeds": 9.48,
                    "title": "Folate"
                },
                {
                    "amount": "1mg",
                    "indented": false,
                    "percentOfDailyNeeds": 7.62,
                    "title": "Iron"
                },
                {
                    "amount": "1mg",
                    "indented": false,
                    "percentOfDailyNeeds": 7.48,
                    "title": "Vitamin B3"
                },
                {
                    "amount": "0.12mg",
                    "indented": false,
                    "percentOfDailyNeeds": 7.34,
                    "title": "Vitamin B2"
                },
                {
                    "amount": "5mg",
                    "indented": false,
                    "percentOfDailyNeeds": 7.26,
                    "title": "Vitamin C"
                },
                {
                    "amount": "4\u00b5g",
                    "indented": false,
                    "percentOfDailyNeeds": 6.26,
                    "title": "Selenium"
                },
                {
                    "amount": "182mg",
                    "indented": false,
                    "percentOfDailyNeeds": 5.21,
                    "title": "Potassium"
                },
                {
                    "amount": "43mg",
                    "indented": false,
                    "percentOfDailyNeeds": 4.38,
                    "title": "Calcium"
                },
                {
                    "amount": "42mg",
                    "indented": false,
                    "percentOfDailyNeeds": 4.24,
                    "title": "Phosphorus"
                },
                {
                    "amount": "13mg",
                    "indented": false,
                    "percentOfDailyNeeds": 3.43,
                    "title": "Magnesium"
                },
                {
                    "amount": "0.48mg",
                    "indented": false,
                    "percentOfDailyNeeds": 3.19,
                    "title": "Vitamin E"
                },
                {
                    "amount": "0.06mg",
                    "indented": false,
                    "percentOfDailyNeeds": 3.11,
                    "title": "Copper"
                },
                {
                    "amount": "0.26mg",
                    "indented": false,
                    "percentOfDailyNeeds": 2.56,
                    "title": "Vitamin B5"
                },
                {
                    "amount": "0.05mg",
                    "indented": false,
                    "percentOfDailyNeeds": 2.32,
                    "title": "Vitamin B6"
                },
                {
                    "amount": "0.29mg",
                    "indented": false,
                    "percentOfDailyNeeds": 1.96,
                    "title": "Zinc"
                },
                {
                    "amount": "76IU",
                    "indented": false,
                    "percentOfDailyNeeds": 1.53,
                    "title": "Vitamin A"
                }
            ]    
        }
        // this.foodStore.client.getRecipeNutritionWidgetByID(this.recipeID, (error: any, data: any)=>{
        //     console.log(data);
        //     // this.recipeSummary = data.summary;
        //     // if(data){
        //     //     this.setState({recipesNutrition: data.results});
        //     // }
            
        // })
    }
    componentDidMount(){
        document.title = "Recipe page";
      }
    
    getRecipeInfo(){
        // this.foodStore.client.getRecipeInformation(this.recipeID, {includeNutrition:true}, (error: any, data: any)=>{
        //     console.log(data);
        //     console.log(data.image);
        //     if(data){
        //         this.state = {
        //             recipeInfo: data
        //         };
        //         this.setState(this.state);
        //     }
            
        //     // console.log(this.state.recipeInfo);
        // });

        this.state = {
            recipeInfo: {"vegetarian":true,"vegan":false,"glutenFree":false,"dairyFree":false,"veryHealthy":true,"cheap":false,"veryPopular":true,"sustainable":false,"weightWatcherSmartPoints":15,"gaps":"no","lowFodmap":false,"preparationMinutes":5,"cookingMinutes":0,"aggregateLikes":689,"spoonacularScore":99.0,"healthScore":63.0,"creditsText":"Jen West","license":"CC BY-SA 3.0","sourceName":"Pink When","pricePerServing":204.29,"extendedIngredients":[{"id":9040,"aisle":"Produce","image":"bananas.jpg","consistency":"solid","name":"banana","original":"¼ cup mashed banana","originalString":"¼ cup mashed banana","originalName":"mashed banana","amount":0.25,"unit":"cup","meta":["mashed"],"metaInformation":["mashed"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"ml","unitLong":"milliliters"}}},{"id":10018617,"aisle":"Sweet Snacks;Baking","image":"graham-crackers.jpg","consistency":"solid","name":"graham cracker crumbs","original":"2 tbsp graham cracker crumbs","originalString":"2 tbsp graham cracker crumbs","originalName":"graham cracker crumbs","amount":2.0,"unit":"tbsp","meta":[],"metaInformation":[],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":16223,"aisle":"Milk, Eggs, Other Dairy","image":"soy-milk.jpg","consistency":"liquid","name":"soy milk","original":"1 cup soy milk","originalString":"1 cup soy milk","originalName":"soy milk","amount":1.0,"unit":"cup","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"cup","unitLong":"cup"},"metric":{"amount":236.588,"unitShort":"ml","unitLong":"milliliters"}}},{"id":9316,"aisle":"Produce","image":"strawberries.png","consistency":"solid","name":"strawberries","original":"½ cup strawberries","originalString":"½ cup strawberries","originalName":"strawberries","amount":0.5,"unit":"cup","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":1119,"aisle":"Milk, Eggs, Other Dairy","image":"vanilla-yogurt.png","consistency":"liquid","name":"vanilla yogurt","original":"1 container vanilla yogurt","originalString":"1 container vanilla yogurt","originalName":"vanilla yogurt","amount":1.0,"unit":"container","meta":[],"metaInformation":[],"measures":{"us":{"amount":1.0,"unitShort":"container","unitLong":"container"},"metric":{"amount":1.0,"unitShort":"container","unitLong":"container"}}}],"id":715497,"title":"Berry Banana Breakfast Smoothie","readyInMinutes":5,"servings":1,"sourceUrl":"http://www.pinkwhen.com/berry-banana-breakfast-smoothie/","image":"https://spoonacular.com/recipeImages/715497-556x370.jpg","imageType":"jpg","nutrition":{"nutrients":[{"title":"Calories","amount":440.37,"unit":"kcal","percentOfDailyNeeds":22.02},{"title":"Fat","amount":9.87,"unit":"g","percentOfDailyNeeds":15.19},{"title":"Saturated Fat","amount":2.68,"unit":"g","percentOfDailyNeeds":16.75},{"title":"Carbohydrates","amount":68.8,"unit":"g","percentOfDailyNeeds":22.93},{"title":"Net Carbohydrates","amount":64.76,"unit":"g","percentOfDailyNeeds":23.55},{"title":"Sugar","amount":50.0,"unit":"g","percentOfDailyNeeds":55.56},{"title":"Cholesterol","amount":11.35,"unit":"mg","percentOfDailyNeeds":3.78},{"title":"Sodium","amount":400.72,"unit":"mg","percentOfDailyNeeds":17.42},{"title":"Protein","amount":20.42,"unit":"g","percentOfDailyNeeds":40.84},{"title":"Vitamin C","amount":64.41,"unit":"mg","percentOfDailyNeeds":78.07},{"title":"Calcium","amount":747.77,"unit":"mg","percentOfDailyNeeds":74.78},{"title":"Vitamin B12","amount":3.75,"unit":"µg","percentOfDailyNeeds":62.53},{"title":"Vitamin B2","amount":1.02,"unit":"mg","percentOfDailyNeeds":59.83},{"title":"Vitamin B3","amount":9.3,"unit":"mg","percentOfDailyNeeds":46.48},{"title":"Vitamin B6","amount":0.84,"unit":"mg","percentOfDailyNeeds":42.17},{"title":"Vitamin E","amount":6.24,"unit":"mg","percentOfDailyNeeds":41.59},{"title":"Phosphorus","amount":372.38,"unit":"mg","percentOfDailyNeeds":37.24},{"title":"Folate","amount":134.47,"unit":"µg","percentOfDailyNeeds":33.62},{"title":"Potassium","amount":1109.7,"unit":"mg","percentOfDailyNeeds":31.71},{"title":"Selenium","amount":17.21,"unit":"µg","percentOfDailyNeeds":24.59},{"title":"Vitamin A","amount":1057.73,"unit":"IU","percentOfDailyNeeds":21.15},{"title":"Vitamin B1","amount":0.32,"unit":"mg","percentOfDailyNeeds":21.08},{"title":"Zinc","amount":3.0,"unit":"mg","percentOfDailyNeeds":19.97},{"title":"Copper","amount":0.39,"unit":"mg","percentOfDailyNeeds":19.48},{"title":"Manganese","amount":0.39,"unit":"mg","percentOfDailyNeeds":19.41},{"title":"Vitamin D","amount":2.83,"unit":"µg","percentOfDailyNeeds":18.88},{"title":"Magnesium","amount":67.61,"unit":"mg","percentOfDailyNeeds":16.9},{"title":"Fiber","amount":4.04,"unit":"g","percentOfDailyNeeds":16.16},{"title":"Vitamin B5","amount":1.47,"unit":"mg","percentOfDailyNeeds":14.68},{"title":"Iron","amount":2.53,"unit":"mg","percentOfDailyNeeds":14.08},{"title":"Vitamin K","amount":2.0,"unit":"µg","percentOfDailyNeeds":1.9}],"properties":[{"title":"Glycemic Index","amount":202.19,"unit":""},{"title":"Glycemic Load","amount":18.97,"unit":""}],"flavanoids":[{"title":"Cyanidin","amount":1.21,"unit":"mg"},{"title":"Petunidin","amount":0.08,"unit":"mg"},{"title":"Delphinidin","amount":0.22,"unit":"mg"},{"title":"Malvidin","amount":0.01,"unit":"mg"},{"title":"Pelargonidin","amount":17.89,"unit":"mg"},{"title":"Peonidin","amount":0.04,"unit":"mg"},{"title":"Catechin","amount":4.53,"unit":"mg"},{"title":"Epigallocatechin","amount":0.56,"unit":"mg"},{"title":"Epicatechin","amount":0.31,"unit":"mg"},{"title":"Epicatechin 3-gallate","amount":0.11,"unit":"mg"},{"title":"Epigallocatechin 3-gallate","amount":0.08,"unit":"mg"},{"title":"Theaflavin","amount":0.0,"unit":""},{"title":"Thearubigins","amount":0.0,"unit":""},{"title":"Eriodictyol","amount":0.0,"unit":""},{"title":"Hesperetin","amount":0.0,"unit":"mg"},{"title":"Naringenin","amount":0.19,"unit":"mg"},{"title":"Apigenin","amount":0.0,"unit":"mg"},{"title":"Luteolin","amount":0.0,"unit":"mg"},{"title":"Isorhamnetin","amount":0.0,"unit":"mg"},{"title":"Kaempferol","amount":0.4,"unit":"mg"},{"title":"Myricetin","amount":0.03,"unit":"mg"},{"title":"Quercetin","amount":0.82,"unit":"mg"},{"title":"Theaflavin-3,3'-digallate","amount":0.0,"unit":""},{"title":"Theaflavin-3'-gallate","amount":0.0,"unit":""},{"title":"Theaflavin-3-gallate","amount":0.0,"unit":""},{"title":"Gallocatechin","amount":0.02,"unit":"mg"}],"ingredients":[{"name":"banana","amount":0.25,"unit":"cup","nutrients":[{"name":"Phosphorus","amount":8.25,"unit":"mg"},{"name":"Choline","amount":3.68,"unit":"mg"},{"name":"Magnesium","amount":10.13,"unit":"mg"},{"name":"Vitamin B3","amount":0.25,"unit":"mg"},{"name":"Vitamin E","amount":0.04,"unit":"mg"},{"name":"Folate","amount":7.5,"unit":"µg"},{"name":"Fluoride","amount":0.83,"unit":"mg"},{"name":"Manganese","amount":0.1,"unit":"mg"},{"name":"Copper","amount":0.03,"unit":"mg"},{"name":"Cholesterol","amount":0.0,"unit":"mg"},{"name":"Carbohydrates","amount":8.57,"unit":"g"},{"name":"Folic Acid","amount":0.0,"unit":"µg"},{"name":"Vitamin K","amount":0.19,"unit":"µg"},{"name":"Calories","amount":33.38,"unit":"kcal"},{"name":"Calcium","amount":1.88,"unit":"mg"},{"name":"Saturated Fat","amount":0.04,"unit":"g"},{"name":"Iron","amount":0.1,"unit":"mg"},{"name":"Fat","amount":0.12,"unit":"g"},{"name":"Vitamin B12","amount":0.0,"unit":"µg"},{"name":"Fiber","amount":0.98,"unit":"g"},{"name":"Vitamin B5","amount":0.13,"unit":"mg"},{"name":"Potassium","amount":134.25,"unit":"mg"},{"name":"Caffeine","amount":0.0,"unit":"mg"},{"name":"Vitamin D","amount":0.0,"unit":"µg"},{"name":"Vitamin C","amount":3.26,"unit":"mg"},{"name":"Protein","amount":0.41,"unit":"g"},{"name":"Zinc","amount":0.06,"unit":"mg"},{"name":"Alcohol","amount":0.0,"unit":"g"},{"name":"Sugar","amount":4.59,"unit":"g"},{"name":"Sodium","amount":0.38,"unit":"mg"},{"name":"Vitamin B1","amount":0.01,"unit":"mg"},{"name":"Poly Unsaturated Fat","amount":0.03,"unit":"g"},{"name":"Selenium","amount":0.38,"unit":"µg"},{"name":"Vitamin A","amount":24.0,"unit":"IU"},{"name":"Net Carbohydrates","amount":7.59,"unit":"g"},{"name":"Vitamin B2","amount":0.03,"unit":"mg"},{"name":"Vitamin B6","amount":0.14,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0.01,"unit":"g"}]},{"name":"graham cracker crumbs","amount":2.0,"unit":"tbsp","nutrients":[{"name":"Phosphorus","amount":40.4,"unit":"mg"},{"name":"Magnesium","amount":11.8,"unit":"mg"},{"name":"Vitamin B3","amount":0.76,"unit":"mg"},{"name":"Folate","amount":9.2,"unit":"µg"},{"name":"Copper","amount":0.01,"unit":"mg"},{"name":"Cholesterol","amount":0.0,"unit":"mg"},{"name":"Carbohydrates","amount":15.24,"unit":"g"},{"name":"Calories","amount":84.8,"unit":"kcal"},{"name":"Calcium","amount":15.8,"unit":"mg"},{"name":"Saturated Fat","amount":0.31,"unit":"g"},{"name":"Iron","amount":0.83,"unit":"mg"},{"name":"Fat","amount":2.0,"unit":"g"},{"name":"Fiber","amount":0.68,"unit":"g"},{"name":"Potassium","amount":35.4,"unit":"mg"},{"name":"Vitamin C","amount":0.0,"unit":"mg"},{"name":"Protein","amount":1.4,"unit":"g"},{"name":"Zinc","amount":0.39,"unit":"mg"},{"name":"Sugar","amount":4.6,"unit":"g"},{"name":"Sodium","amount":131.8,"unit":"mg"},{"name":"Vitamin B1","amount":0.05,"unit":"mg"},{"name":"Poly Unsaturated Fat","amount":0.09,"unit":"g"},{"name":"Vitamin A","amount":0.0,"unit":"IU"},{"name":"Net Carbohydrates","amount":14.56,"unit":"g"},{"name":"Vitamin B2","amount":0.05,"unit":"mg"},{"name":"Vitamin B6","amount":0.02,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0.72,"unit":"g"}]},{"name":"soy milk","amount":1.0,"unit":"cup","nutrients":[{"name":"Vitamin B3","amount":7.77,"unit":"mg"},{"name":"Vitamin E","amount":5.95,"unit":"mg"},{"name":"Trans Fat","amount":0.0,"unit":"g"},{"name":"Folate","amount":75.52,"unit":"µg"},{"name":"Copper","amount":0.29,"unit":"mg"},{"name":"Cholesterol","amount":0.0,"unit":"mg"},{"name":"Carbohydrates","amount":8.14,"unit":"g"},{"name":"Calories","amount":106.2,"unit":"kcal"},{"name":"Calcium","amount":330.4,"unit":"mg"},{"name":"Saturated Fat","amount":0.49,"unit":"g"},{"name":"Iron","amount":1.16,"unit":"mg"},{"name":"Fat","amount":4.7,"unit":"g"},{"name":"Vitamin B12","amount":2.55,"unit":"µg"},{"name":"Fiber","amount":0.94,"unit":"g"},{"name":"Potassium","amount":332.76,"unit":"mg"},{"name":"Vitamin D","amount":2.83,"unit":"µg"},{"name":"Vitamin C","amount":16.99,"unit":"mg"},{"name":"Protein","amount":6.94,"unit":"g"},{"name":"Zinc","amount":0.57,"unit":"mg"},{"name":"Sugar","amount":5.97,"unit":"g"},{"name":"Sodium","amount":118.0,"unit":"mg"},{"name":"Vitamin B1","amount":0.15,"unit":"mg"},{"name":"Poly Unsaturated Fat","amount":2.81,"unit":"g"},{"name":"Selenium","amount":5.43,"unit":"µg"},{"name":"Vitamin A","amount":927.48,"unit":"IU"},{"name":"Net Carbohydrates","amount":7.2,"unit":"g"},{"name":"Vitamin B2","amount":0.47,"unit":"mg"},{"name":"Vitamin B6","amount":0.55,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0.97,"unit":"g"}]},{"name":"strawberries","amount":0.5,"unit":"cup","nutrients":[{"name":"Phosphorus","amount":17.28,"unit":"mg"},{"name":"Choline","amount":4.1,"unit":"mg"},{"name":"Magnesium","amount":9.36,"unit":"mg"},{"name":"Vitamin B3","amount":0.28,"unit":"mg"},{"name":"Vitamin E","amount":0.21,"unit":"mg"},{"name":"Folate","amount":17.28,"unit":"µg"},{"name":"Fluoride","amount":3.17,"unit":"mg"},{"name":"Manganese","amount":0.28,"unit":"mg"},{"name":"Copper","amount":0.03,"unit":"mg"},{"name":"Cholesterol","amount":0.0,"unit":"mg"},{"name":"Carbohydrates","amount":5.53,"unit":"g"},{"name":"Folic Acid","amount":0.0,"unit":"µg"},{"name":"Vitamin K","amount":1.58,"unit":"µg"},{"name":"Calories","amount":23.04,"unit":"kcal"},{"name":"Calcium","amount":11.52,"unit":"mg"},{"name":"Saturated Fat","amount":0.01,"unit":"g"},{"name":"Iron","amount":0.3,"unit":"mg"},{"name":"Fat","amount":0.22,"unit":"g"},{"name":"Vitamin B12","amount":0.0,"unit":"µg"},{"name":"Fiber","amount":1.44,"unit":"g"},{"name":"Vitamin B5","amount":0.09,"unit":"mg"},{"name":"Potassium","amount":110.16,"unit":"mg"},{"name":"Caffeine","amount":0.0,"unit":"mg"},{"name":"Vitamin D","amount":0.0,"unit":"µg"},{"name":"Vitamin C","amount":42.34,"unit":"mg"},{"name":"Protein","amount":0.48,"unit":"g"},{"name":"Zinc","amount":0.1,"unit":"mg"},{"name":"Alcohol","amount":0.0,"unit":"g"},{"name":"Sugar","amount":3.52,"unit":"g"},{"name":"Sodium","amount":0.72,"unit":"mg"},{"name":"Vitamin B1","amount":0.02,"unit":"mg"},{"name":"Poly Unsaturated Fat","amount":0.11,"unit":"g"},{"name":"Selenium","amount":0.29,"unit":"µg"},{"name":"Vitamin A","amount":8.64,"unit":"IU"},{"name":"Net Carbohydrates","amount":4.09,"unit":"g"},{"name":"Vitamin B2","amount":0.02,"unit":"mg"},{"name":"Vitamin B6","amount":0.03,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0.03,"unit":"g"}]},{"name":"vanilla yogurt","amount":1.0,"unit":"container","nutrients":[{"name":"Phosphorus","amount":306.45,"unit":"mg"},{"name":"Choline","amount":34.5,"unit":"mg"},{"name":"Magnesium","amount":36.32,"unit":"mg"},{"name":"Vitamin B3","amount":0.24,"unit":"mg"},{"name":"Vitamin E","amount":0.05,"unit":"mg"},{"name":"Folate","amount":24.97,"unit":"µg"},{"name":"Fluoride","amount":27.24,"unit":"mg"},{"name":"Manganese","amount":0.01,"unit":"mg"},{"name":"Copper","amount":0.03,"unit":"mg"},{"name":"Cholesterol","amount":11.35,"unit":"mg"},{"name":"Carbohydrates","amount":31.33,"unit":"g"},{"name":"Folic Acid","amount":0.0,"unit":"µg"},{"name":"Vitamin K","amount":0.23,"unit":"µg"},{"name":"Calories","amount":192.95,"unit":"kcal"},{"name":"Calcium","amount":388.17,"unit":"mg"},{"name":"Saturated Fat","amount":1.83,"unit":"g"},{"name":"Iron","amount":0.16,"unit":"mg"},{"name":"Fat","amount":2.84,"unit":"g"},{"name":"Vitamin B12","amount":1.2,"unit":"µg"},{"name":"Fiber","amount":0.0,"unit":"g"},{"name":"Vitamin B5","amount":1.25,"unit":"mg"},{"name":"Potassium","amount":497.13,"unit":"mg"},{"name":"Caffeine","amount":0.0,"unit":"mg"},{"name":"Vitamin D","amount":0.0,"unit":"µg"},{"name":"Vitamin C","amount":1.82,"unit":"mg"},{"name":"Protein","amount":11.19,"unit":"g"},{"name":"Zinc","amount":1.88,"unit":"mg"},{"name":"Alcohol","amount":0.0,"unit":"g"},{"name":"Sugar","amount":31.33,"unit":"g"},{"name":"Sodium","amount":149.82,"unit":"mg"},{"name":"Vitamin B1","amount":0.1,"unit":"mg"},{"name":"Poly Unsaturated Fat","amount":0.08,"unit":"g"},{"name":"Selenium","amount":11.12,"unit":"µg"},{"name":"Vitamin A","amount":97.61,"unit":"IU"},{"name":"Net Carbohydrates","amount":31.33,"unit":"g"},{"name":"Vitamin B2","amount":0.46,"unit":"mg"},{"name":"Vitamin B6","amount":0.1,"unit":"mg"},{"name":"Mono Unsaturated Fat","amount":0.78,"unit":"g"}]}],"caloricBreakdown":{"percentProtein":18.32,"percentFat":19.94,"percentCarbs":61.74},"weightPerServing":{"amount":593,"unit":"g"}},"summary":"If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817\">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-breakfast-smoothie-774875\">Berry Breakfast Smoothie</a>.","cuisines":[],"dishTypes":["morning meal","brunch","breakfast"],"diets":["lacto ovo vegetarian"],"occasions":[],"winePairing":{},"instructions":"<p>Take some yogurt in your favorite flavor and add 1 container to your blender. Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.</p>","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Take some yogurt in your favorite flavor and add 1 container to your blender.","ingredients":[{"id":1116,"name":"yogurt","localizedName":"yogurt","image":"plain-yogurt.jpg"}],"equipment":[{"id":404726,"name":"blender","localizedName":"blender","image":"blender.png"}]},{"number":2,"step":"Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.","ingredients":[{"id":10018617,"name":"graham cracker crumbs","localizedName":"graham cracker crumbs","image":"graham-crackers.jpg"},{"id":16223,"name":"soymilk","localizedName":"soymilk","image":"soy-milk.jpg"},{"id":1009054,"name":"berries","localizedName":"berries","image":"berries-mixed.jpg"},{"id":9040,"name":"banana","localizedName":"banana","image":"bananas.jpg"}],"equipment":[]}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/berry-banana-breakfast-smoothie-715497"}
        }
        this.setState(this.state);
    }
    
    renderInstructions(){
        let instructions = []
        let i = 0;
       
        for (i; i < this.recipeInstructions[0].steps.length; i++){
            // console.log(this.recipeInstructions[0].steps[i])
            instructions.push(
                <ListGroup.Item as="li" className="instruction" key={i}><b>{i+1}.</b> {this.recipeInstructions[0].steps[i].step}</ListGroup.Item>
            )}
        return instructions;
    }

    renderIngredients(){
   
        let ingredients = [];
        let i = 0;
        if (this.state.recipeInfo.extendedIngredients){
            console.log(this.state.recipeInfo);
            for (i; i < this.state.recipeInfo.extendedIngredients.length; i++){
                ingredients.push(
                    <p className="ingredient text-center" key={i}>{this.state.recipeInfo.extendedIngredients[i].original}</p>
                )}
        }
        
        return ingredients;
    }

    addToMealPlan(){
        
    }
    
    render() {


        return(
            <div>
                <Row xl="2" lg="1" md="1">
                    <Col className="recipeImg text-center">
                        <img src={this.state.recipeInfo.image}></img>
                    </Col>
                    <Col> 
                        <h1 className="recipeInfoCol recipeTitle" >{this.state.recipeInfo.title}</h1>
                        <Row>
                            <Col className="text-center">
                                <Card className="card text-left">
                                    <Card.Text className="cardText"><b>Total time:    </b> {this.state.recipeInfo.readyInMinutes} mins</Card.Text>
                                    <Card.Text className="cardText"><b>Servings:   </b> {this.state.recipeInfo.servings}</Card.Text>
                                    <Card.Text className="cardText"><b>Calories:</b> {this.recipeNutrition.calories}</Card.Text>
                                    <Card.Text className="cardText"><b>Protein:</b> {this.recipeNutrition.protein}</Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Button onClick = {this.addToMealPlan}>Add to Meal Plan</Button>
                            </Col>
                        
                        </Row>
                        
                    </Col>
                </Row>

                     <Row className="recipeInfo">
                         <Col className="ingredients">
                             <Container>
                             <h3 className="text-center ingredientsTitle">Ingredients</h3>
                                 { this.renderIngredients()}
                             </Container>
                            
                         </Col>
                         <Col className="instructions">
                         <h3 className="instructionsTitle">Instructions</h3>
                        <ListGroup as="ul">
                                 { this.renderInstructions()}
                             </ListGroup>
                         </Col>
                     </Row>
            </div>
            
            
        )
      }
}
export default Page;
