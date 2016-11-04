// begin business logic

function PizzaOrder (size, toppingTotal) {
  this.size = size;
  this.toppingTotal = toppingTotal;
}

  // var toppingCostResult = [];
  //
  // $("input:checkbox[name=typeTopping]:checked").each(function() {
  //   var userOrderToppings = $(this).val();
  //   toppingCostResult.push(userOrderToppings);




// begin user interface


$(document).ready(function() {
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

    console.log(newPizzaOrder);



    $("#prelimOrder").text("You ordered")

  });
});
