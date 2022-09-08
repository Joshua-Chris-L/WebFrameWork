import { User } from "./models/user";

const user = new User({name:"new Record33", age:23});

// user.set({name: "NewuName", age: 9989});
user.save();

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