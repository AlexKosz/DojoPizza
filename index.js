function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzerlla", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("handTossed", "marinara", ["mozzerlla", "feta"], ["mushrooms", "olives"]);
