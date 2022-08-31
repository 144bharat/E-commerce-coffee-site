
let coffeedata=JSON.parse(localStorage.getItem("coffeekey"))||[]
document.querySelector("form").addEventListener("submit",signup);

function signup(event){
    event.preventDefault();
    let form = document.querySelector("form")
    let name=form.name.value
    let email=form.email.value
    let password=form.password.value
    
   
   
    let flag=false
    for(let i=0; i<coffeedata.length; i++){
      if(coffeedata[i].email==email || email==null){
        flag=true;
      }
   }if(flag==false){
    let s1=new givenData(name,email,password)
    coffeedata.push(s1)
    localStorage.setItem("coffeekey", JSON.stringify(coffeedata))
    window.location.href="./login.html"
   }else{
    alert("Invalid Credential :(");
   }
}
function givenData(n,e,p){
    this.name=n
    this.email=e
    this.password=p
}
