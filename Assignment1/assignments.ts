// Task 1 Basic data types
let empName: string = 'Santhosh';
let age: number = 10;
let married: boolean = false;
let arr: number[] = [1, 2, 3, 4, 5, 6];
let details: [string, number] = ['Empno', 12345];
enum week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

// Task 2 functions

let add = (num1: number, num2: number): number => {
    return num1 + num2;
};
let capitalize = (value: string): string => {
    let valueSplit = value.split(' ')
    for (var i = 0; i < valueSplit.length; i++) {
        valueSplit[i] = valueSplit[i].charAt(0).toUpperCase() + valueSplit[i].slice(1)
    }
    return valueSplit.join(' ');
};

console.log(add(4, 5));

console.log(capitalize('hello my name is santhosh'));


// Task 3  Interfaces

interface Person {
    name: string,
    age: number,
    email: string
};

let user: Person = {
    name: 'Santhosh',
    age: 22,
    email: 'santhoshkosuru311@gmail.com'
};

// Task 4 classes
class Car {

    make!: string;
    model!: string;
    year!: number;

    displayInfo(): void {
        console.log(`${this.make} of model ${this.model} is manufactured in the year ${this.year} !!`);
    };
};

let carObj = new Car();
carObj.make = 'Ford';
carObj.model = 'Y203';
carObj.year = 2023;
carObj.displayInfo();

// Task 5 GenericArray

function reversedArray<Type>(arr: Array<Type>): Array<Type> {
    return arr.reverse();
};

console.log(reversedArray([1, 2, 3, 4, 5]));
console.log(reversedArray(['a', 'b', 'c', 'd', 'e']));