# Домашнє завдання — Тема 1. Основи об'єктно-орієнтованого програмування

Реалізація моделі бібліотеки з використанням ключових принципів ООП у TypeScript: інкапсуляції, наслідування, поліморфізму та композиції.

## Що реалізовано

| Клас / Сервіс | Опис |
|---|---|
| `AbstractBook` | Абстрактний базовий клас з приватними полями та абстрактним `getDescription()` |
| `Book` | Фізична книга — розширює `AbstractBook` |
| `EBook` | Електронна книга — розширює `AbstractBook`, додає поле `url` |
| `Author` | Зберігає ім'я та список написаних книг |
| `Copy` | Фізичний примірник книги з прапорцем доступності |
| `Reader` | Читач із унікальним `id` та списком позичених копій |
| `Library` | Агрегатор: зберігає авторів, книги, копії, читачів |
| `BorrowService` | Сервіс позичання: `borrow()` та `returnBook()` |

## Структура проєкту

```
src/
├── models/
│   ├── AbstractBook.ts
│   ├── Author.ts
│   ├── Book.ts
│   ├── Copy.ts
│   ├── EBook.ts
│   ├── Library.ts
│   └── Reader.ts
├── services/
│   └── BorrowService.ts
└── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/main.ts
```

## Приклад виводу

```
Attempting to borrow copy1...
Borrow result: true
Attempting to borrow copy1 again...
Borrow result: false
Attempting to return copy1...
Copy1 is available: true

Book descriptions:
Physical book "The Great Book" by John Doe (2020)
E-book "Digital Book" by John Doe (2021) - Available at: https://example.com/ebook
```
