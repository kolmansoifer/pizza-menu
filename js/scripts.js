function Pizza(crust, topping, size) {
  this.crust = crust
  this.topping = topping
  this.size = size
}

Pizza.prototype.calcPrice = function () {
  let pizzaPrice = parseInt(this.size);

  if (this.crust === "3") {
    pizzaPrice += 5;
  }
  else if (this.crust === "2") {
    ticketCost += 2;
  }
  else {
    pizzaPrice === 10;
  }

  if (this.topping === "4" || this.topping === "5") {
    pizzaPrice += 3;
  }
  else if (this.topping === "6" || this.topping === "7") {
    pizzaPrice += 1;
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

