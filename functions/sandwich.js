let orderCount = 0;
const takeOrder = (topping, topping2, topping3, topping4, topping5) => {
 console.log(`sandwich with ${topping}, ${topping2}, ${topping3}, ${topping4} and ${topping5}`);
 orderCount++;
 console.log (orderCount)
}
takeOrder("ham", "lettuce", "cucumber", "tomato", "pickle");