//Задание Напишите функцию filter(), фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.

function filter(array, property, value) {
    let result = [];
    for (obj of array) {
        if (obj[property] === value ) {
            result.push(obj);
        }
    }
    return result;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
];
 

 let result = filter(objects, 'name', 'Иван');
console.log(result);