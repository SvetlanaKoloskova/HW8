//Задание 1

const mult = (arr) => {
    let rez = arr[0];
    for (let i = 1; i < arr.length; i++) {
        rez *= arr[i];
    }
    return rez;
}

const sum = (arr) => {
    let rez = arr[0];
    for (let i = 1; i < arr.length; i++) {
        rez += arr[i];
    }
    return rez;
}

const getResult = (arr, callback) => callback(arr);

getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);

//Задание 2

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

const compareUser = (a, b) => a.age - b.age;
const getSortedArrayObj = (el) => el.sort(compareUser);
console.log(getSortedArrayObj(users));

//Задание 3

const reversArr = (arr) => arr.reverse();

const toNumberArr = (arr) => {
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (isNaN(arr[i])) {
            arr.splice(i, 1);
        }
        else {
            arr[i] = Number(arr[i]);
        }
    }
    return arr;
}

const each = (arr, callback) => callback(arr);

//Задание 4

function currentDate () {
    myDate = new Date();
    console.log(myDate); 
}

let intervalId = setInterval(currentDate, 3000);
setTimeout(() => { clearInterval(intervalId); console.log('30 секунд прошло'); }, 30000);

//Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        let response = console.log('Идут гудки...');
        callback(response);
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
let response = beeps(talk);