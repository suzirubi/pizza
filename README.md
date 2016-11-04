# Object-Oriented JavaScript Independent Project: Ping-Pong
_*Epicodus Introduction to Programming Week 4 Project, 11-05-16*_

by Suzi Rubino

##Description
The instructions for the requirements of this project are as follows:

###Order Pizza
 - [ ] Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

 - [ ] Allow the user to choose toppings and size for the pizza they'd like to order.

 - [ ] Create a pizza object constructor with properties for toppings and size.

 - [ ] Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

###Further Exploration

 - [ ] Style your site with CSS and images.
 - [ ] Allow users to order more than one pizza with different toppings.
 - [ ] Display the list of pizzas ordered as links that can be clicked for details.
 - [ ] Offer a delivery option that then requires address information.

###Objectives
 - [ ] Code meets standards from previous weeks.
 - [ ] Objects drive business logic (in JavaScript, not jQuery).
 - [ ] Constructors and prototypes are used successfully.
 - [ ] Application works as expected.
 - [ ] Plain English specs are included in your README.
 - [ ] Required functionality is in place by the 5:00pm Friday deadline.
 - [ ] Project is in a polished, portfolio-quality state.
 - [ ] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.

##Specifications

- [ ] Create html and css styles with one form that includes input selectors for pizza size and pizza toppings with area for display of pizza ordered and cost.
    -  Example Input: Select pizza size, select pizza toppings
      - pizza size selectors are small, medium and large
      - pizza toppings include cheese, pepperoni, olives
      - user clicks submit button with "pizza cost" label
    -  Example Output:
      - radio buttons with sizes to check (only one) PARSEINT
      - checkbox buttons with toppings available (multiple values available)
      - display area indicating order and cost

- [ ] Create javascript for user input with submit function and test functionality
    - Example Input: small pizza selected, cheese and pepperoni selected
    - Example Output: user input registered in variables (check in console log)
      - var = user size selected (one of three)
      - var = user toppings selected (x of three)
      - variable will be indexed to array in object (may need to move the function that creates this array to business logic?)

 - [ ] Create constructor in business logo for Pizza Object (will be called Order) to hold above info. Create variable in user logic to define input and store in Object.
    - Example Input: user input above defined as new Order and stored in Order object
      - variables above = new Order (userSize, userToppings)
    - Example Output: object returns correct order for pizza
      - Pizza key value in new object this.pizzaSize = new user order
      - Pizza key value in new object this.pizzaTopping = new user order

- [ ] Create prototype for pizza object to compute cost of pizza
    - Example Input: new object this.pizzaSize + new object this.pizzaTopping(s) = this.pizzaOrder
    - Example Output: your "x" pizza with "x" and "y" will cost "z"

- [ ] Store this in a git branch as meeting basic requirements for class

- [ ] In new branch create html submit button for additional pizza order that displays new field with additional pizza order
    - Example input: Add another pizza to your oder, same fields above
    - Example output: previous order is increased and new display field will provide new feedback including previous order information and new order information displayed together

- [ ] Create new key value in Pizza Object, additional order
    - Example input: newPizzaSize newPizzaToppings = this.additionalOrder
    - Example output: this.additionalOrder = user input

- [ ] Update prototype with branch for pizza cost to include (if additional toppings)
    - Example input: this.additionalOrder + (previous function)
    - Example output: You ordered "number pizzas" pizzas with (x = define size and toppings and y = define size and toppings)

- [ ] Create object to store user info, create prototype to push user info into pizza
    - Example Input: name and address
    - Example Output: customer info object

##Setup/Installation requirements
* [visit my gh-page for Independent Project #4](https://suzirubi.github.io/ping-pong)
* [visit my gh-page for Independent Project #3](https://suzirubi.github.io/ping-pong)
* [Visit my gh page for Indpendent Project #2](https://suzirubi.github.io/Independent-Project-Week-2/)
* [Visit my gh page for Independent Project #1](https://suzirubi.github.io/portfolioFix/)

## Known Bugs
_* x *_


## Technologies Used

1. html
2. github
3. custom and bootstrap cascading style sheets
4. custom and jQuery javascript utilizing objects

## Copyright and license information

Not applicable at this time.
