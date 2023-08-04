// Array of Object
let items = [
    {
      id: 1,
      name: "Apple Envy USA",
      type: "fruit",
      price: 75000,
      stock: 10,
    },
    {
      id: 2,
      name: "Carrot Jakarta",
      type: "vegetables",
      price: 50000,
      stock: 5,
    },
    {
      id: 3,
      name: "Dragon Fruit",
      type: "fruit",
      price: 55000,
      stock: 7,
    },
    {
      id: 4,
      name: "Pepaya",
      type: "fruit",
      price: 60000,
      stock: 10,
    },
    {
      id: 5,
      name: "Melon",
      type: "fruit",
      price: 80000,
      stock: 10,
    },
];

function showItems() {
    console.log("Item list: ");
    for (let i = 0; i < items.length; i++) {
      console.log(
        items[i].id + ". " + items[i].name + ", Rp. " + items[i].price + "/kg."
      );
    }
    // console.log(items);
};

function addItem(name, type, price, stock) {
    let lastIndex = items.length - 1;
    let id = items[lastIndex].id + 1;
    let tempObj = {
      id,
      name,
      type,
      price,
      stock,
    };
    items.push(tempObj);
  }

function removeItem(id) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        result.push(items[i]);
      }
    }
    if (result.length === items.length) {
      console.log("Id " + id + " not found.");
    } else {
      items = result;
      console.log("Id " + id + " has been removed.");
    }
  }

function updateItem(id, name, type, price, stock) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].name = name;
        items[i].type = type;
        items[i].price = price;
        items[i].stock = stock;
      }
      result.push(items[i]);
    }
    items = result;
  }

showItems();
addItem("Jeruk", "fruit", 100000, 10);
addItem("Sawi", "vegetables", 5000, 5);
