'use strict'
function myRandom(min, max, size){
    let arr = [];
    for (let i = 0; i < size; i++){
        let rand = min + Math.random() * (max + 1 - min);
        arr[i] = Math.floor(rand);
    }
    return arr;
}

function findMin(arr, absoluteMax){
    let localMin = absoluteMax;
    arr.forEach(item => {
        if(item > 0 && item <= localMin){
            localMin = item;
        }
    })
    return localMin;
}

function findMax(arr, absoluteMin){
    let localMax = absoluteMin;
    arr.forEach(item => {
        if(item < 0 && item >= localMax){
            localMax = item;
        }
    })
    return localMax;
}

function sortSelection(arr, max){
    let arrayToSort = arr.slice();
    let result = [];
    
    while(arrayToSort.length != 0){
        let localMax = max;
        for(let i = 0; i < arrayToSort.length; i++){
            if(arrayToSort[i] > localMax) localMax = arrayToSort[i];
        }
        result.push(localMax);
        arrayToSort.splice(arrayToSort.indexOf(localMax), 1);
    }
    return result;
}

alert("Массив будет сгенерирован и заполнен автоматически.\nНужно указать нижнее и верхнее значение для генерации слечайных чисел");
let min = parseInt(prompt("Введите, пожалуйста минимальное число","-10"));
let max = parseInt(prompt("Введите, пожалуйста максимальное число","10"));
let size = parseInt(prompt("Введите, пожалуйста количество элементов в массиве","10"));
let arr = myRandom(min, max, size);
console.log(arr);


console.log(`Максимальное число среди отрицательных = ${findMax(arr, min)}`);
console.log(`Минимальное число среди положительных = ${findMin(arr, max)}`);

let res = sortSelection(arr, min);
console.log("Происходит сортировка методом выбора...");
console.log("Начальный массив:" + arr + "\nОтсортированный массив:" + res);