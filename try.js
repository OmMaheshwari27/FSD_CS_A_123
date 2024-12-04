
// let a=12;
// console.log(a);
// if(a>10){
//     console.log(a);
//     a=10;
//     console.log(a);
//     let b=5
//     console.log(5);

// }
// console.log(a);
// console.log(b);
// console.log(Number.MAX_VALUE);
// let a=Symbol.for("name")
// console.log(Symbol.keyFor(a));
// function hello(){
//     console.log("123");

// }
// function hell(a,b){
//     return a+b;
// } 
// hello();
// let  add=hell;
// console.log(add);

// console.log(hell(1,5));
function register() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("register");
         resolve();
        },6000);
    })

}
function sendemail() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sendEmail");
            resolve();
        },6000);
    })


}
function login() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login");
            resolve();
        },6000);
    })
}
function getuserdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getUserData");
            resolve();
        },6000);
    })
}
function displayuser() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displayUser");
            resolve();
        },6000);
    })
}
//callback hell
// register(function(){
//     sendemail(function(){
//         login(function(){
//             gertuserdata(function(){
//                 displayuser(); 
//             });
//         });
//     });
// });       

register().then(sendemail).then(login).then(getuserdata).then(displayuser)
.catch((err)=>{
    console.log(err);
})



register();
sendemail();
login();
getuserdata();
displayuser();
