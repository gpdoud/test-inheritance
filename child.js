const Parent = require("./parent");

class Child extends Parent {
    constructor() {
        super();
        this.number = 88;
    }
}

let c = new Child();
console.log("Number is %d, name is %s", c.number, c.name);