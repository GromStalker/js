//Задание 1: Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
let emails = ["example1@gmail.com", "example2@yahoo.ru", "example3@gmail.com", "example4@rumbler.ru"]
let blacklist = ["example2@yahoo.ru", "example4@rumbler.ru"] 

function filter(emails, blacklist) {
    let filteredEmails = [];
    for (let email of emails) {
        if (blacklist.indexOf(email) === -1 && !blacklist.includes(email)) {
            filteredEmails.push(email);
        }
    }
    return filteredEmails;
}

console.log(filter(emails, blacklist));

//Задание 2 Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:

function calculate(totalAmount, numItems, promoCode = null) {
    if (promoCode === 'ДАРИМ300') {
        totalAmount -= 300;
        if (totalAmount < 0) {
            return 0;
        }
    }
 
   else if (numItems >= 10) {
        totalAmount *= 0.95;
    }
    
    else if (totalAmount > 50000) {
        totalAmount -= (totalAmount - 50000) * 0.20;
    }
        
    else if (promoCode === 'СКИДКА15' && totalAmount >= 20000) {
        totalAmount *= 0.85;
    }
    
    return totalAmount;
}

console.log(calculate(60000, 8)); // Возвращает 57000.0 (скидка 20% на 10000)
console.log(calculate(30000, 12)); // Возвращает 28500.0 (скидка 5%)
console.log(calculate(25000, 5, 'СКИДКА15')); // Возвращает 25000 (не применяется скидка)
console.log(calculate(10000, 15, 'ДАРИМ300')); // Возвращает 0 (промокод "ДАРИМ300")