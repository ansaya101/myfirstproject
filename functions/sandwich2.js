let orderCount = 0;
const takeOrder = (topping, topping2) => {
 console.log(`Pizza with ${topping} and ${topping2}`);
 orderCount++;
 console.log (orderCount)
}
takeOrder("ham", "pinapple");
takeOrder("ham", "pinapple");
takeOrder("ham", "cheese")