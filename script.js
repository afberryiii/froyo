const usersOrder = prompt(
  "Enter the frozen yogurt flavors you'd like.",
  "vanilla, vanilla, strawberry. chocolate, boysenberry"
);

const flavors = usersOrder.split(",");

console.log(flavors);

const orders = {};

for (let i = 0; i < flavors.length; i++) {
  console.log(flavors[i]);
  console.log(flavors[i].length);
  flavors[i] = flavors[i].trim();
  if (!(flavors[i] in orders)) {
    console.log("Adding flavor...");

    orders[flavors[i]] = 1;
  } else {
    orders[flavors[i]] += 1;
  }
}

console.log(orders);
