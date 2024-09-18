//creacion de arrays
let arrayOne = []

arrayOne = 0
arrayOne = 2
arrayOne = 4
arrayOne = 6
arrayOne = 8

let arrayTwo = []

arrayTwo = 1
arrayTwo = 3
arrayTwo = 5
arrayTwo = 7
arrayTwo = 9

let arrayThree = []

arrayThree = yamaha
arrayThree = honda
arrayThree = kawasaki
arrayThree = suzuki
arrayThree = ducati

let arrayFour = []

arrayFour = bmw
arrayFour = nissan
arrayFour = dodge
arrayFour = toyota
arrayFour = mustang

let arrayFive = []

arrayFive = 1
arrayFive = 1
arrayFive = 2
arrayFive = 3
arrayFive = 5

//.reduce()

console.log("Reduce suma:", arrayOne.reduce((acc, curr) => acc + curr, 0));
console.log("Reduce suma:", arrayTwo.reduce((acc, curr) => acc + curr, 0));
console.log("Reduce concatenación:", arrayThree.reduce((acc, curr) => acc + ", " + curr));
console.log("Reduce concatenación:", arrayFour.reduce((acc, curr) => acc + ", " + curr));
console.log("Reduce (suma de todos los números):", arrayFive.reduce((acc, curr) => acc + curr, 0));

//.forEach()

arrayOne.forEach(num => console.log("forEach:", num));
arrayTwo.forEach(num => console.log("forEach:", num));
arrayThree.forEach(item => console.log("forEach:", item));
arrayFour.forEach(item => console.log("forEach:", item));
console.log("ForEach (imprimir cada número):");
arrayFive.forEach(num => console.log(num));

//.filter()

console.log("Filter pares:", arrayOne.filter(num => num % 2 === 0));
console.log("Filter impares:", arrayTwo.filter(num => num % 2 !== 0));
console.log("Filter longitud > 5:", arrayThree.filter(item => item.length > 5));
console.log("Filter empieza con 'b':", arrayFour.filter(item => item.toLowerCase().startsWith('b')));
console.log("Filter (números mayores que 2):", arrayFive.filter(num => num > 2));

//.map()

console.log("Map al cuadrado:", arrayOne.map(num => num * num));
console.log("Map al cubo:", arrayTwo.map(num => num * num * num));
console.log("Map mayúsculas:", arrayThree.map(item => item.toUpperCase()));
console.log("Map longitud:", arrayFour.map(item => item.length));
console.log("Map (multiplicar cada número por 2):", arrayFive.map(num => num * 2));
