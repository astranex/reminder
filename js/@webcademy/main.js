/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */

// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// Вывод в консоль

console.log('Hello from JS!')

// =================== 2. Переменные ===================

let userName = 'Марк'

// =================== 2.1 Типы переменных ===================

// Новый стандарт переменных ES6 (EcmaScript 2015):
// let - переменная
// const - константа

// Старый стандарт переменных ES5:
// var - переменная

userName = 'Егор'

// let может менять своё значение

// const не может менять своё значение

const yearOfBirth = 2002

let name, age // Переменные let необязательно объявлять, их можно просто инициализировать, и лишь через время использовать
const nickName = 'ViJeT' // Переменные const обязательно нужно объявлять

// var старый формат переменной
// В отличии от let и const имеет функциональную область видимости, а не блочную
// Не рекомендуется к использованию

pressF = 'F'
let alertF = (f = pressF) => alert(f)

alertF()

// =================== 2.2 Типы данных ===================

age = 19 // Число

isMarried = false // Булевое значение. Логическое

// Динамическая типизация

let someVariable = 'Some text' // Сейчас someVariable типа string
someVariable = 50 // someVariable мутирует в тип number
someVariable = true

// Пример плохого нейминга

let u = 'value'

// Пример хорошего нейминга

const lastName = 'Jameson'

someVariable = 32

// undefined значит, что переменная объявлена, но значение не установлено

10 == 10 ? alert('yes') : alert('no')



