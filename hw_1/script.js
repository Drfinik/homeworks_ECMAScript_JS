// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
//  найти минимальное число в массиве, решение задание должно состоять из одной строки.

// Ответ: 

console.log(Math.min(...[1, 5, 7, 9]));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с
//  двумя методами: increment и decrement. Метод increment должен увеличивать значение
//  счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
//  Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// Ответ: 

function createCounter() {
    let count = 0;

    return {
        increment:() => count++,
        decrement:() => count--,
        getCount:() => count      
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); 
counter.decrement();
counter.decrement();
console.log(counter.getCount());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент
// дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент
//  с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// Ответ: 

function findElementByClass(rootElement, className) {   
    if (rootElement.classList.contains(className)) {
        return rootElement; 
    }    
    
    for (let i = 0; i < rootElement.children.length; i++) {
        const childElement = rootElement.children[i];
        const foundElement = findElementByClass(childElement, className);
        if (foundElement) {
            return foundElement; 
        }
    }    
   
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);