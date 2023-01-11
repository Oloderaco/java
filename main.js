// Функция - это часть какого либо кода который выполняет какое то действие или вычисление и его можно использовать в любо месте вашего кода

// function declaration

// function res() {
//     let sum = 10 + 30;
//     return sum
// } 

// function expression

// let res = function() {
//     let sum = 10 + 30;
//     return sum
// }

// console.log(res());


// function param(a,b,c,d = 100) {
//     let sum = a + b + c + d
//     return sum
// }
// console.log(param(10,20,30, 5));


// function all(min,max) {
//     let sum = 0;
//     for(let i = min; i < max; i++) {
//         sum += i
//     }
//     return sum    
// }

// console.log(all(1,10));
// console.log(all(50,100));


// Math.random() - Отдает рандомное число от 0 до 0.99999
// Math.floor() - округляет наше число до наименьшено целого
// Math.ceil() - округляет наше число до наибольшего целого
// Math.round() - округляет наше число по матем правилом


// function rand(min,max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
// }

// let minNumber = +prompt('введите минимальный диапазон');
// let maxNumber = +prompt('введите максимальный диапазон');

// for(let i = 1; i < 5;i++) {
//     let one = rand(minNumber,maxNumber);
//     let two = rand(minNumber,maxNumber);
//     let primer = +prompt(one + ' + ' + two + ' =')
//     let word = primer == (one + two) ? 'Молодец' : 'Слабак';
//     alert(one + ' + ' + two + ' = ' + (one + two) + ' Ваш ответ ' + primer + ', ' + word)
// }


function intro() {
    let imya = prompt(' Insert your full^name ?');
    let vozrast = +prompt(' Insert the year you were born ');
    let fck = +prompt(' Insert the current year ');
    let ans = (imya + ' ' + (fck - vozrast));
    alert(ans);
    return ans
}
console.log(intro());


function math(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
let count = +prompt(' Insert the amount of problems ');

for (let i = 0; i < count; i++) {
    let one = math(1, 100);
    let two = math(1, 100);
    let znak = math(1, 4);
    let result = 0;
    if (znak == 1) {
        result = one + two
        znak = ' + '
    } else if (znak == 2) {
        result = one - two
        znak = ' - '
    } else if (znak == 3) {
        result = one * two
        znak = ' * '
    } else if (znak == 4) {
        result = one / two
        znak = ' / '
    }
    let primer = +prompt(one + znak + two + ' = ');
    alert(primer == result ? ' Good job ' : ' Nah , bro... ')
}