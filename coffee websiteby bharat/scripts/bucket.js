// On clicking remove button the item should be removed from DOM as well as localstorage.

let total=0;

let data=JSON.parse(localStorage.getItem("coffee"));
function putdata(data)
{
    let container=document.getElementById("container");
    container.innerHTML=null;
  data.forEach((e,index)=>{
    let div=document.createElement("div");
    
    let img=document.createElement("img");
        img.src=e.image;
    
        let title=document.createElement("h2");
        title.innerText=e.title;
    
        let price=document.createElement("h4");
        price.innerText="$"+e.price;
        console.log(price);
        total=total + (+e.price);
    
        let button=document.createElement("button");
        button.innerText="remove";
        button.className="removemyself";
    button.addEventListener("click",function(){
        remove(index);
    })
        
        div.append(img,title,price,button);
    
        container.append(div);
  })  
}
putdata(data);
function remove(index)
{
    data.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(data));
    window.location.reload();
}

document.querySelector("#coffee_count").innerText=data.length;

let totalp=document.getElementById("totalp");
totalp.innerText="$"+total;

let checkme=document.getElementById("checkme");
checkme.addEventListener("click",()=>{
    window.location.href="./signup.html";
})
document.querySelector("#myback").addEventListener("click",()=>{
    window.location.href="./main.html";
})