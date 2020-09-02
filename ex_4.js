// Write your code here:
const dogFactory = (name, breed, weight) => {
    if (typeof name === "string" && typeof breed === "string" && typeof weight === "number")
        return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                return this._name;
            },
            get breed() {
                return this._breed;
            },
            get weight() {
                return this._weight;
            },
            set name(name) {
                if (typeof name === "string")
                    this._name = name;
                else   
                    console.log("must be a string");
            },
            set breed(b) {
                if (typeof b === "string")
                    this._breed = b;
                else   
                    console.log("must be a string");
            },
            set weight(w) {
                if (typeof w === "number")
                    this._weight = w;
                else   
                    console.log("must be a number");
            },
            bark() {
                console.log('ruff! ruff!');
            },
            eatTooManyTreats() {
                this._weight += 1;
            }
        };
    else
        return "invalid input";
}