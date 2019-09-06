let coffeeIsGrinding = true;
//the false means that the coffee isn't gridning
//the  true means that the
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();