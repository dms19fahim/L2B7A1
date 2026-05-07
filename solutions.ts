// Problem 1 Code -- Solution
function filterEvenNumbers(arr: number[]): number[] {
    let newArr = arr.filter((num) => num % 2 === 0)
    return newArr
}
filterEvenNumbers([1, 2, 3, 4, 5, 6])


// Problem 2 Code -- Solution
function reverseString(str: string): string {
    let stringBreakdown = str.split("")
    let reverse = stringBreakdown.reverse()
    return reverse.join("")
}
reverseString("typescript")


// Problem 3 Code -- Solution
type StringOrNumber = string | number
function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String"
    }
    else {
        return "Number"
    }
    
}
checkType("Hello")


// Problem 4 Code -- Solution
function getProperty<T, K extends keyof T>(userInfo: T, key: K): T[K] {
    return userInfo[key]
}

let userInfo = {id: 1, name: "John Doe", age: 21}
getProperty(userInfo, "name")


// Problem 5 Code -- Solution
interface Book {
    title: string,
    author: string,
    publishedYear: number
}
function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    }
}
let myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
}
toggleReadStatus(myBook)


// Problem 6 Code -- Solution
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

let student = new Student("Alice", 20, "A")

student.getDetails()


// Problem 7 Code -- Solution
function getIntersection(arr1: number[], arr2: number[]): number[] {
    let newArr = arr1.filter((num) => arr2.includes(num))
    return newArr
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])