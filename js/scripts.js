function Pizza(crust, topping, size) {
  this.crust = crust
  this.topping = topping
  this.size = size
}

Pizza.prototype.calcPrice = function () {
  let pizzaPrice = parseInt(this.size);

  if (this.crust === "1") {
    pizzaPrice += 0;
  }
  else if (this.crust === "2") {
    ticketCost += 3;
  }
  else {
    pizzaPrice += 5;
  }

  if (this.topping === "4") {
    pizzaPrice += 0;
  }
  else if (this.topping === "5" || this.topping === "6") {
    pizzaPrice += 1;
  }
  else if (this.topping === "7" || this.topping === "8") {
    pizzaPrice += 3;
  }
  else {
    pizzaPrice += 0;
  }

  return pizzaPrice;
}

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    const pizzaCrust = $("#crust").val();
    const pizzaTopping = $("#topping").val();
    const pizzaSize = $("#size").val();

    let myPizza = new Pizza(pizzaCrust, pizzaTopping, pizzaSize);
    let price = myPizza.calcPrice();

    $("#result").text(price);
    $("h3").show();
  })
})

