/*
 * Objects, interfaces, and API's


let dog = {
    name: "Bailey",
    color: "Black",
    breed: "Labrador",
    size: "Large",
    bark: function (typeOfBark) {
        console.log("Bark!");
    },
};
 */

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
