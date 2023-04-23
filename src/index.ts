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
    constructor(public email: string, public name: string) {}

    get getAplleEmail(): string {
        return `apple ${this.email}`;
    }
}

const kudez = new User("kudezx@gmail.com", "Kudez");
