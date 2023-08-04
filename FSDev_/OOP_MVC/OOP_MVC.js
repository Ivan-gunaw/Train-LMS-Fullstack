// OOP
// penulisan Class baru selalu diawali dengan huruf besar - contoh : "Vehicle"

// berikut ini ada;ah contoh "Class" atau "Blueprint", pada saat dilakukan print, belum menunjukan hasil (tidak ada output)
class Vehicle{
    // pada bagian ini setelah "=" -> adalah parameter dalam kurung constructor
    constructor(name, type, price){
        this.name = name;
        this.type = type; 
        this.price = price;
    }

    startEngine(){
        console.log ("Start engine")
    
    }
    stopEngine(){
        console.log ("Stop engine")
    }
}

// kata kunci "new" berfungsi untuk menambahkan data kedalam variable
// variable dibawah adalah "Instance" hasil jadi dari sebuah "class"
let vehicle = new Vehicle ("Civic", "Sedan", 1000000);
let vehicle2 = new Vehicle ("Brio","Mini SUV",500000);

// console.log(vehicle);
// console.log(typeof vehicle);

// console.log(Vehicle);
// console.log(typeof Vehicle);

class Person {
    constructor(name, address, age){
        this.name = name;
        this.address = address;
        this.age = age;
    }

    speak() {
        console.log(`My name is ${this.name}`);
    }
    growUp() {
        console.log("Grow Up");
    }
}

let vincent = new Person ("Vincent", "Jakarta", 17);
vincent = new Person ("Vincent Lee", "Jakarta Barat", 18);
vincent = new Person ("Vincent Lee Halim", "Jakarta Raya", 20);

// console.log(vincent); // hasil berupa 'object'
// console.log(typeof vincent); // 'object'

// console.log(Person); // [class Person]
// console.log(typeof Person); // function

// vincent.speak();
// vincent.growUp();

//--------------------------------------------------------------------------//
// Empat Pilar Utama dalam Object Oriented Programming, adalah:
// 1) Inheritance -> membuat "Class" baru dengan fungsi turunan/mirip dari fungsi sebelumnya

// contoh Syntax // CLASS itu SINGULAR
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Programmer extends Person {
//     constructor (name, age) {
//         super (name, age)
//     }
// }

// Case
class Fruit {
    constructor(name, type, price, stock, brand){
        this.name = name;
        this.type = type;
        this.price = price;
        this.stock = stock;
        this.brand = brand;
    }
}

class Apple extends Fruit {
    constructor(name, type, price, stock, brand){
        super(name, type, price, stock, brand);
    }
}

class Orange extends Fruit {
    constructor(name, type, price, stock, brand){
        super(name, type, price, stock, brand);
    }
}

class Grape extends Fruit {
    constructor(name, type, price, stock, brand){
        super(name, type, price, stock, brand);
    }
}

const apple = new Apple("Envy USA", "apple", 15000, 10, "sun-apple");
const orange = new Orange("Pokan Sweet", "orange", 12500, 5, "pokan");
const grape = new Grape("Midnight Purple", "grape", 50000, 5, "midnight");

console.log(apple);
console.log(orange);
console.log(grape);

// 2) Polymorphism


// 3) Encapsulation

// class Student {
//     constructor(name, gpa){
//         this._name = name;
//         this._gpa = gpa;
//     }
//     get name () {
//         return this._name;
//     }
//     get gpa () {
//         return this._gpa;
//     }
//     set setName(name) {
//         return this._name = name;
//     }
//     set setGPA(gpa) {
//         return this._gpa = gpa;
//     }
// }

// 4) Abstraction