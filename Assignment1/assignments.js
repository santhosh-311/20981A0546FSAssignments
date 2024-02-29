// Task 1 Basic data types
var empName = 'Santhosh';
var age = 10;
var married = false;
var arr = [1, 2, 3, 4, 5, 6];
var details = ['Empno', 12345];
var week;
(function (week) {
    week[week["Sunday"] = 0] = "Sunday";
    week[week["Monday"] = 1] = "Monday";
    week[week["Tuesday"] = 2] = "Tuesday";
    week[week["Wednesday"] = 3] = "Wednesday";
    week[week["Thursday"] = 4] = "Thursday";
    week[week["Friday"] = 5] = "Friday";
    week[week["Saturday"] = 6] = "Saturday";
})(week || (week = {}));
;
// Task 2 functions
var add = function (num1, num2) {
    return num1 + num2;
};
var capitalize = function (value) {
    var valueSplit = value.split(' ');
    for (var i = 0; i < valueSplit.length; i++) {
        valueSplit[i] = valueSplit[i].charAt(0).toUpperCase() + valueSplit[i].slice(1);
    }
    return valueSplit.join(' ');
};
console.log(add(4, 5));
console.log(capitalize('hello my name is santhosh'));
;
var user = {
    name: 'Santhosh',
    age: 22,
    email: 'santhoshkosuru311@gmail.com'
};
// Task 4 classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.displayInfo = function () {
        console.log("".concat(this.make, " of model ").concat(this.model, " is manufactured in the year ").concat(this.year, " !!"));
    };
    ;
    return Car;
}());
;
var carObj = new Car();
carObj.make = 'Ford';
carObj.model = 'Y203';
carObj.year = 2023;
carObj.displayInfo();
// Task 5 GenericArray
function reversedArray(arr) {
    return arr.reverse();
}
;
console.log(reversedArray([1, 2, 3, 4, 5]));
console.log(reversedArray(['a', 'b', 'c', 'd', 'e']));
