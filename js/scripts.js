// begin business logic







// begin user interface


$(document).ready(function() {
  $("form#orderSize").submit(function(event) {
    event.preventDefault();

    var userSizeInput = parseInt($("input[type='radio'][name='size']:checked").val());


    var userCheese = $("input:checkbox[name=typeTopping]:checked").val();
    var userOlive = $("input:checkbox[name=typeTopping]:checked").val();
    var userPepperoni = $("input:checkbox[name=typeTopping]:checked").val();

    var toppingCostResult = [];

    $("input:checkbox[name=typeTopping]:checked").each(function() {
      var userOrderToppings = $(this).val();
      toppingCostResult.push(userOrderToppings);
    });

  });
});
