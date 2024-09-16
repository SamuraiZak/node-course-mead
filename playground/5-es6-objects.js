// Object property shorthand

const name = "Zaki";
const age = 24;

const user = {
  name,
  age,
  location: "Kuching",
};

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 310,
  salePrice: undefined,
};

 const { label : productLabel, stock, rating = 5 } = product;

 console.log(productLabel)
// console.log(productLabel);
// console.log(stock);
// console.log(rating);
