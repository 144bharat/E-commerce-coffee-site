let coffeedata=JSON.parse(localStorage.getItem("coffeekey"))||[]

document.querySelector("form").addEventListener("submit",login)


let Logincoffeedata=JSON.parse(localStorage.getItem("loginCoffee"))||[]

function login(e){
    e.preventDefault()
    let form = document.querySelector("form");
    let email=form.email.value;
    let password=form.password.value;

   
    let flag=false;
    for(let i=0; i<coffeedata.length; i++){
        if((coffeedata[i].email==email || email==null) && (coffeedata[i].password==password || password==null)){
            flag=true
    }
}if(flag==true){
    let s1=new Person(email,password)
    Logincoffeedata.push(s1);
    localStorage.setItem("loginCoffee", JSON.stringify(Logincoffeedata));
    window.location.href="./checkout.html"
}else{
    alert("Please Sign Up !")
}
}
function Person(e,p){
    this.email=e
    this.password=p
}

let button2=document.querySelector(".butt2");
button2.addEventListener("click",()=>{
    window.location.href="https://www.google.com/";
});
//-----------------R--------------------------

// let coffeedata=JSON.parse(localStorage.getItem("loginCoffee"))||[]
// document.querySelector("form").addEventListener("submit",login)

// function login(e){
//     e.preventDefault()
//     let form = document.querySelector("form");
//     let email=form.email.value;
//     let password=form.password.value;

   
//     let flag=false;
//     for(let i=0; i<coffeedata.length; i++){
//         if(coffeedata[i].email==email || email==null){
//             flag=true
//     }
// }if(flag==false){
//     let s1=new Person(email,password)
//     coffeedata.push(s1);
//     localStorage.setItem("loginCoffee", JSON.stringify(coffeedata));
//     window.location.href="index.html"
// }else{
//     alert("Invalid Credential")
// }
// }
// function Person(e,p){
//     this.email=e
//     this.password=p
// }