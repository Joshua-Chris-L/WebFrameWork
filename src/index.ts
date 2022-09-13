import { User } from "./models/user";

const user = User.buildUser({id:1})

user.on('save', () => {
    console.log(user);
});

//user.fetch();

user.fetch();

//user.on()

// A quick reminder on accessors
// class Person {
//     constructor(public firstName: string, public lastName: string){}

//     get fullname(): string {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const person = new Person('firstName', 'lastname');
// console.log(person.fullname);







// user.set({name: "NewuName", age: 9989});
//user.save();

// user.fetch();

//const user = new User({name: "My Name", age: 20});

// user.on('name', ()=> {
//    console.log('change')
//});
// user.on("change", () => {
//    console.log("change 2")
// })
// user.on("changeee", () => {
//     console.log('save was triggered')
// })

// user.trigger('name');


// console.log(user);