// const square = function (x) {
//     return x*x
// }

const event = {
  name: "Birthday Party",
  // printGuestList: function () {
  //     console.log('Guest list for ' + this.name)
  // }
  guestList: ["Zaki", "Anjing"],
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending the " + this.name);
    });
  },
  arrowFunctionTest: () => {
    console.log(this.name);
  },
};

event.printGuestList();

// const c1 = {
//     x: 55,
//     y: 75
// }

// const c2 = {
//     x: 1234,
//     y:890
// }

// function printCoordinates(){

// }
