import React from "react"

import FoodStore from '../../../Stores/FoodStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/esm/Card";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
// import { Card, Icon, Image } from 'semantic-ui-react'

import './Page.sass';


type PageProps = {
    foodStore: FoodStore;
}


class Page extends React.Component<PageProps>{
    private foodStore: FoodStore;
    recipeID: number;
    recipeInfo:any;
    recipeSummary:string;
    recipeNutrition:any;
    recipeInstructions:any;

    constructor(props:any){
        super(props);
        this.foodStore = props.foodStore;
        this.recipeSummary = "The recipe Soy-and-Ginger-Glazed Salmon with Udon Noodles can be made  <b>in approximately 1 hour and 35 minutes </b>. One portion of this dish contains about  <b>48g of protein </b>,  <b>17g of fat </b>, and a total of  <b>552 calories </b>. This recipe serves 4. For  <b>$5.91 per serving </b>, this recipe  <b>covers 47% </b> of your daily requirements of vitamins and minerals. It works well as a main course. 1 person has tried and liked this recipe. It is brought to you by Food and Wine. If you have fresh ginger, udon noodles, salmon fillets, and a few other ingredients on hand, you can make it. It is a good option if you're following a  <b>dairy free and pescatarian </b> diet. All things considered, we decided this recipe  <b>deserves a spoonacular score of 92% </b>. This score is great. If you like this recipe, take a look at these similar recipes: Salmon With Soy-ginger Noodles, Ginger-Soy Salmon With Soba Noodles, and Soy & ginger salmon with soba noodles.";
        let url = new URL(window.location.href);
        this.recipeID = parseInt(url.pathname.split('/')[2],10);
        console.log(this.recipeID);
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
        this.recipeInfo = {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
            "imageType": "jpg",
            "servings": 2,
            "readyInMinutes": 45,
            "license": "CC BY-SA 3.0",
            "sourceName": "Full Belly Sisters",
            "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
            "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
            "aggregateLikes": 209,
            "healthScore": 19.0,
            "spoonacularScore": 83.0,
            "pricePerServing": 163.15,
            "analyzedInstructions": [],
            "cheap": false,
            "creditsText": "Full Belly Sisters",
            "cuisines": [],
            "dairyFree": false,
            "diets": [],
            "gaps": "no",
            "glutenFree": false,
            "instructions": "",
            "ketogenic": false,
            "lowFodmap": false,
            "occasions": [],
            "sustainable": false,
            "vegan": false,
            "vegetarian": false,
            "veryHealthy": false,
            "veryPopular": false,
            "whole30": false,
            "weightWatcherSmartPoints": 17,
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "extendedIngredients": [
                {
                    "aisle": "Milk, Eggs, Other Dairy",
                    "amount": 1.0,
                    "consitency": "solid",
                    "id": 1001,
                    "image": "butter-sliced.jpg",
                    "measures": {
                        "metric": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        },
                        "us": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        }
                    },
                    "meta": [],
                    "name": "butter",
                    "original": "1 tbsp butter",
                    "originalName": "butter",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Produce",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 10011135,
                    "image": "cauliflower.jpg",
                    "measures": {
                        "metric": {
                            "amount": 473.176,
                            "unitLong": "milliliters",
                            "unitShort": "ml"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "cups",
                            "unitShort": "cups"
                        }
                    },
                    "meta": [
                        "frozen",
                        "thawed",
                        "cut into bite-sized pieces"
                    ],
                    "name": "cauliflower florets",
                    "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "unit": "cups"
                },
                {
                    "aisle": "Cheese",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1041009,
                    "image": "cheddar-cheese.png",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        }
                    },
                    "meta": [
                        "grated",
                        "(I used romano)"
                    ],
                    "name": "cheese",
                    "original": "2 tbsp grated cheese (I used romano)",
                    "originalName": "grated cheese (I used romano)",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "amount": 1.0,
                    "consitency": "liquid",
                    "id": 1034053,
                    "image": "olive-oil.jpg",
                    "measures": {
                        "metric": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        },
                        "us": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        }
                    },
                    "meta": [],
                    "name": "extra virgin olive oil",
                    "original": "1-2 tbsp extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Produce",
                    "amount": 5.0,
                    "consitency": "solid",
                    "id": 11215,
                    "image": "garlic.jpg",
                    "measures": {
                        "metric": {
                            "amount": 5.0,
                            "unitLong": "cloves",
                            "unitShort": "cloves"
                        },
                        "us": {
                            "amount": 5.0,
                            "unitLong": "cloves",
                            "unitShort": "cloves"
                        }
                    },
                    "meta": [],
                    "name": "garlic",
                    "original": "5-6 cloves garlic",
                    "originalName": "garlic",
                    "unit": "cloves"
                },
                {
                    "aisle": "Pasta and Rice",
                    "amount": 6.0,
                    "consitency": "solid",
                    "id": 20420,
                    "image": "fusilli.jpg",
                    "measures": {
                        "metric": {
                            "amount": 170.097,
                            "unitLong": "grams",
                            "unitShort": "g"
                        },
                        "us": {
                            "amount": 6.0,
                            "unitLong": "ounces",
                            "unitShort": "oz"
                        }
                    },
                    "meta": [
                        "(I used linguine)"
                    ],
                    "name": "pasta",
                    "original": "6-8 ounces pasta (I used linguine)",
                    "originalName": "pasta (I used linguine)",
                    "unit": "ounces"
                },
                {
                    "aisle": "Spices and Seasonings",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1032009,
                    "image": "red-pepper-flakes.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "pinches",
                            "unitShort": "pinches"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "pinches",
                            "unitShort": "pinches"
                        }
                    },
                    "meta": [
                        "red"
                    ],
                    "name": "red pepper flakes",
                    "original": "couple of pinches red pepper flakes, optional",
                    "originalName": "couple of red pepper flakes, optional",
                    "unit": "pinches"
                },
                {
                    "aisle": "Spices and Seasonings",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1102047,
                    "image": "salt-and-pepper.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "servings",
                            "unitShort": "servings"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "servings",
                            "unitShort": "servings"
                        }
                    },
                    "meta": [
                        "to taste"
                    ],
                    "name": "salt and pepper",
                    "original": "salt and pepper, to taste",
                    "originalName": "salt and pepper, to taste",
                    "unit": "servings"
                },
                {
                    "aisle": "Produce",
                    "amount": 3.0,
                    "consitency": "solid",
                    "id": 11291,
                    "image": "spring-onions.jpg",
                    "measures": {
                        "metric": {
                            "amount": 3.0,
                            "unitLong": "",
                            "unitShort": ""
                        },
                        "us": {
                            "amount": 3.0,
                            "unitLong": "",
                            "unitShort": ""
                        }
                    },
                    "meta": [
                        "white",
                        "green",
                        "separated",
                        "chopped"
                    ],
                    "name": "scallions",
                    "original": "3 scallions, chopped, white and green parts separated",
                    "originalName": "scallions, chopped, white and green parts separated",
                    "unit": ""
                },
                {
                    "aisle": "Alcoholic Beverages",
                    "amount": 2.0,
                    "consitency": "liquid",
                    "id": 14106,
                    "image": "white-wine.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        }
                    },
                    "meta": [
                        "white"
                    ],
                    "name": "white wine",
                    "original": "2-3 tbsp white wine",
                    "originalName": "white wine",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Pasta and Rice",
                    "amount": 0.25,
                    "consitency": "solid",
                    "id": 99025,
                    "image": "breadcrumbs.jpg",
                    "measures": {
                        "metric": {
                            "amount": 59.147,
                            "unitLong": "milliliters",
                            "unitShort": "ml"
                        },
                        "us": {
                            "amount": 0.25,
                            "unitLong": "cups",
                            "unitShort": "cups"
                        }
                    },
                    "meta": [
                        "whole wheat",
                        "(I used panko)"
                    ],
                    "name": "whole wheat bread crumbs",
                    "original": "1/4 cup whole wheat bread crumbs (I used panko)",
                    "originalName": "whole wheat bread crumbs (I used panko)",
                    "unit": "cup"
                }
            ],
            "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
            "winePairing": {
                "pairedWines": [
                    "chardonnay",
                    "gruener veltliner",
                    "sauvignon blanc"
                ],
                "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
                "productMatches": [
                    {
                        "id": 469199,
                        "title": "Buddha Kat Winery Chardonnay",
                        "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                        "price": "$25.0",
                        "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                        "averageRating": 0.8,
                        "ratingCount": 1.0,
                        "score": 0.55,
                        "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
                    }
                ]
            },
        }
        // this.foodStore.client.getRecipeInformation(324694, {includeNutrition:true}, (error: any, data: any)=>{
        //     console.log(data);
        //     // if(data){
        //     //     this.setState({recipes: data.results});
        //     // }
            
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
        //     //     this.setState({recipes: data.results});
        //     // }
            
        // })
    }

   

   
    render() {

        const renderInstructions=()=>{
            let instructions = []
            let i = 0;
           
            for (i; i < this.recipeInstructions[0].steps.length; i++){
                console.log(this.recipeInstructions[0].steps[i])
                instructions.push(
                    <ListGroup.Item as="li" className="instruction" key={i}><b>{i+1}.</b> {this.recipeInstructions[0].steps[i].step}</ListGroup.Item>
                )}
            return instructions;
        }

        const renderIngredients=()=>{
            let ingredients = [];
            let i = 0;
            for (i; i < this.recipeInfo.extendedIngredients.length; i++){
                console.log(this.recipeInfo.extendedIngredients[i].name)
                ingredients.push(
                    <p className="ingredient text-left" key={i}>{this.recipeInfo.extendedIngredients[i].original}</p>
                )}
            return ingredients;
        }

        return(
            <div>
                <Row xl="2" lg="1" md="1">
                    <Col className="recipeImg text-center">
                        <img src={this.recipeInfo.image}></img>
                    </Col>
                    <Col> 
                        <h1 className="recipeInfoCol recipeTitle" text-center>{this.recipeInfo.title}</h1>
                        <Row>
                            <Col>
                                <Card className="card">
                                    <Card.Text className="cardText"><b>Total time:    </b> {this.recipeInfo.readyInMinutes} mins</Card.Text>
                                    <Card.Text className="cardText"><b>Servings:   </b> {this.recipeInfo.servings}</Card.Text>
                                    <Card.Text className="cardText"><b>Calories:</b> {this.recipeNutrition.calories}</Card.Text>
                                    <Card.Text className="cardText"><b>Protein:</b> {this.recipeNutrition.protein}</Card.Text>
                                </Card>
                            </Col>
                            <Col>
                                <Button>Add to Meal Plan</Button>
                            </Col>
                        
                        </Row>
                        
                    </Col>
                </Row>

                    <Row className="recipeInfo">
                        <Col className="ingredients text-center">
                            <Container>
                            <h3 className="text-left ingredientsTitle">Ingredients</h3>
                                { renderIngredients()}
                            </Container>
                            
                        </Col>
                        <Col className="instructions">
                            <h3 className="instructionsTitle">Instructions</h3>
                            <ListGroup as="ul">
                                { renderInstructions()}
                            </ListGroup>
                        </Col>
                    </Row>
            </div>
            
            
        )
      }
}
export default Page;
