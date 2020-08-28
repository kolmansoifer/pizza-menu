function Pizza(size, topping) {
  this.size = size,
    this.topping = topping
}

Pizza.prototype.calculatePrice = function () {
  let pizzaPrice = parseInt(this.size);
  if (this.size === "3") {
    pizzaPrice === 10;
  }
  else if (this.size === "2") {
    pizzaPrice += 5;
  }
  else {
    pizzaPrice += 3;
  }
  if (this.topping === "4", "5", "6", "7") {
    pizzaPrice += 2;
  }
  return pizzaPrice;
}

$(document).ready(function () {
  $("#menu").submit(function (event) {
    event.preventDefault();

    const pizzaSize = $("#pizza-size").val();
    const pizzaToppings = $("#pizza-toppings").val();

    let myPizza = new Pizza(pizzaSize, pizzaToppings);
    let price = myPizza.calculatePrice();

    $("#result").text(price);
    $("h3").show();
  })
})

