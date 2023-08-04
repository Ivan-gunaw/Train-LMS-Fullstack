const fs = require("fs");

const item = {
  getItems: function () {
    const data = fs.readFileSync("./data.json", "utf8");
    const items = JSON.parse(data);
    return items;
  },
  showItems: function () {
    let items = this.getItems();

    console.log("Item list: ");
    items.forEach((item) => {
      let { id, name, type, price, stock } = item;
      console.log(`${id}. ${name}, Rp. ${price}.`);
      console.log(`Stock: ${stock} pcs. Type: ${type}`);
      console.log(`================================`);
    });
  },
  createItem: function (name, type, price, stock) {
    let items = this.getItems();
    let id = items[items.length - 1].id + 1;
    items.push({
      id,
      name,
      type,
      price,
      stock,
    });

    this.save(items);
    console.log(`"${name} has been added to the list.`);
  },

  deleteItem: function (id) {
    let items = this.getItems();
    items = items.filter((item) => item.id !== id);

    this.save(items);
    console.log(`"${id} has been removed from the list.`);
  },
  updateItem: function (id, name, type, price, stock) {
    let items = this.getItems();

    items = items.map((item) => {
      if (item.id === id) {
        item.name = name;
        item.type = type;
        item.price = price;
        item.stock = stock;
      }
      return item;
    });

    this.save(items);
    console.log(`"${id}" has been updated`);
  },

  getItemById: function (id) {
    let items = this.getItems();

    let result = {};
    items.forEach((item) => {
      if (item.id === id) {
        result = item;
      }
    });

    const { name, type, price, stock } = result;
    console.log(`Fruit with id ${id}:`);
    console.log(`${id}. ${name}, Rp. ${price}.`);
    console.log(`Stock: ${stock} pcs. Type: ${type}`);
    console.log(`================================`);
  },
  save: function (items) {
    let itemsString = JSON.stringify(items, null, 3);
    fs.writeFileSync("./data.json", itemsString);
  },
};

module.exports = item