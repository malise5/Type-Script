"use strict";
// class User {
//     email: string;
//     name: string;
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// const kudez = new User("kudezx@gmail.com", "Kudez");
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAplleEmail() {
        return `apple ${this.email}`;
    }
}
const kudez = new User("kudezx@gmail.com", "Kudez");
