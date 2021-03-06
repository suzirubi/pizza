// begin business logic

function PizzaOrder (size, toppingsTotal) {
  this.size = size;
  this.toppingsTotal = toppingsTotal;
  this.cost = 0;
}

PizzaOrder.prototype.pizzaCost = function() {
  var toppingsTotalCost = this.toppingsTotal.length;
  if (this.size === 1) {
    this.cost = 5 + toppingsTotalCost;
  } else if (this.size === 2){
    this.cost = 10 + toppingsTotalCost;
  } else if (this.size === 3){
    this.cost = 15 + toppingsTotalCost;
  }
  return this.cost;
}

PizzaOrder.prototype.pizzaSize = function () {
  if (this.size === 1) {
    this.size = "small";
  } else if (this.size === 2){
    this.size = "medium";
  } else if (this.size === 3){
    this.size = "large";
  }
  return this.size;
}





// begin user interface


$(document).ready(function() {
  $("#prelimOrder").hide();
  $(".orderDisplay").hide();
  $(".additionalOrder").hide();

  $("form#orderSize").submit(function(event) {
    event.preventDefault();

    var userSizeInput = parseInt($("input[type='radio'][name='size']:checked").val());
    console.log(userSizeInput);

    var userCheese = $("input:checkbox[name=typeTopping]:checked").val();
    var userOlive = $("input:checkbox[name=typeTopping]:checked").val();
    var userPepperoni = $("input:checkbox[name=typeTopping]:checked").val();

    var toppingTotal = [];

    $("input:checkbox[name=typeTopping]:checked").each(function() {
      var userOrderToppings = $(this).val();
      toppingTotal.push(userOrderToppings);
    });

    var newPizzaOrder = new PizzaOrder (userSizeInput, toppingTotal);

    newPizzaOrder.pizzaCost();

    $("#prelimOrder").show();
    $(".orderDisplay").show();
    $(".additionalOrder").show();

    console.log(newPizzaOrder.cost);

    newPizzaOrder.pizzaSize();


    $("#prelimOrder").text("The " + newPizzaOrder.size + " pizza you ordered with " + newPizzaOrder.toppingsTotal + " toppings will cost $" + newPizzaOrder.cost + ".00");
  });
});
