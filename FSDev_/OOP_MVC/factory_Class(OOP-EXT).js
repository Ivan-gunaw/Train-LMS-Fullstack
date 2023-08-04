class Fruit {
    constructor(id, name, type, price, stock, brand) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.price = price;
      this.stock = stock;
      this.brand = brand;
    }
  }
  
  class Apple extends Fruit {
    constructor(id, name, price, stock, brand) {
      super(id, name, "apple", price, stock, brand);
    }
  }
  
  class Orange extends Fruit {
    constructor(id, name, price, stock, brand) {
      super(id, name, "orange", price, stock, brand);
    }
  }
  
  class Grape extends Fruit {
    constructor(id, name, price, stock, brand) {
      super(id, name, "grape", price, stock, brand);
    }
  }
  
  class FruitStore {
    constructor(box) {
      this.box = box || []; // by default array kosong
    }
    showFruits() {
      //menampilkan fruit dari box
      console.log("Welcome, this is our fruits: ");

      //ES 5
    //   if(this.box.length > 0) {
    //     console.log("ada buah");
    //   }else{
    //     console.log("There is no fruits here.");
    //   }
     
      //ternary -> ES 6
      this.box.length > 0 ? console.log("ada buah") : console.log("There is no fruit here.");
    }
    

    addFruit(name, type, price, stock, brand) {
      // mengisi fruit sesuai dari class-nya

      let tempFruit;
      let id;
      if(this.box.length === 0){
        id = 1;
      }else{
        id = this.box[this.box.length - 1].id + 1;
      }
      switch (type){
        case "apple":
            tempFruit = new Apple(id, name, price, stock, brand);
            break;
        case "orange":
            tempFruit = new Orange(id, name, price, stock, brand);
            break;
        case "grape":
            tempFruit = new Grape(id, name, price, stock, brand);
            break;
      };
      this.box.push(tempFruit);
    }
    sellFruit(id) {
      //
    }
    editFruit(id, name) {
      //
    }
  }

  const fruitStore = new FruitStore();
  
  console.log(fruitStore);
  
  fruitStore.addFruit("Envy USA", "apple", 15000, 10, "sun-apple");
  fruitStore.addFruit("Pokan Sweet", "orange", 12500, 5, "pokan");
  fruitStore.showFruits();
