function Pizza(size, topping) {
  this.size = size,
    this.topping = topping,
}

Pizza.prototype.calculatePrice = function () {
  let pizzaPrice = parseInt(this.size);
  if (this.size === "1") {
    pizzaPrice === 10;
  }
  else if (this.size === "2") {
    pizzaPrice += 5;
  }
  else {
    ticket
  }
}
