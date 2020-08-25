const menu =
{
  _courses:
  {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() { return this._courses.appetizers },
  set appetizers(appetizerIn) { this._courses.appetizers = appetizerIn },
  get mains() { return this._courses.mains },
  set main(mainIn) { this._courses.mains = mainIn },
  get desserts() { return this._courses.desserts },
  set desserts(dessertIn) { this._courses.desserts = dessertIn },
  get courses() 
  {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish =
    {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
    //this._courses[courseName] = dish;
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let rand_index = Math.floor(Math.random() * dishes.length);
    return dishes[rand_index];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const price = appetizer.price + main.price + dessert.price;
    return `Meal: ${appetizer.name}, ${main.name}, ${dessert.name}. Price: ${price}`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Green Salad', 5.25);
menu.addDishToCourse('appetizers', 'Tomato Salad', 6.25);

menu.addDishToCourse('mains', 'burger', 10);
menu.addDishToCourse('mains', 'pizza', 12);
menu.addDishToCourse('mains', 'kebab', 11);

menu.addDishToCourse('desserts', 'vanilla ice-cream', 5.50);
menu.addDishToCourse('desserts', 'berry ice-cream', 4.50);
menu.addDishToCourse('desserts', 'chocolate ice-cream', 6.50);

for (let i = 0; i < 6; i++) {
  console.log(menu.generateRandomMeal());
}