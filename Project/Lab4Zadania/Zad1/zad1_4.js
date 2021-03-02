// Створюємо масиви A та В з числами

let a = [];
let b = [];
let c = [];

a = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
b = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

//Створюємо масив С за формулою
for (let i = 0; i < 10; i++) {
    if (a[i] != b[i]){    
        c[i] = 1/(a[i] - b[i]);
        c[i] = +c[i].toFixed(4);
    } else {
        c[i] = 1;
    }
}

// Виводимо масиви у html-файл
document.getElementById("arrays").innerHTML = "A: " + a + "<br> B: " + b + "</br> <br> C: " + c + "</br>";

// Знаходимо максимальне число
let max = Math.max.apply(null, c);
let maxPos = c.indexOf(max); //console.log(maxPos);

// Копіюємо масив та міняємо місцями перше та максимальне число
let temp;
let c1 = c.slice();
let c2 = c.slice();

temp = c1[0];
c1[0] = max;
c1[maxPos] = temp;

// Виводимо результат у html-файл
document.getElementById("max").innerHTML = "Максимальне число: " + max + 
"</br> <br> До перестановки: " + c + "</br> <br> Після: " + c1 +"</br>" ;

// Сортування бульбашкою
const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

bubbleSort(c2);

// Виводимо результат у html-файл
document.getElementById("sorted").innerHTML = "До сортування: " + c + "</br> <br> Після сортування: " + c2 +"</br>";
 