document.getElementById("confirm").addEventListener("click",function(){
    info();
});
function info()
{
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let address=document.getElementById("address").value;
    
    if(name==="" ||number==="" ||address==="")
    {
        alert("fill your details!");
    }else{
        setTimeout(function(){
            alert("your order is comfirm")
            setTimeout(function(){
                alert("Your order is being Packed ")
                setTimeout(function(){
                    alert("Your order is in transit")
                    setTimeout(function(){
                        alert("Your order is out for delivery")
                        setTimeout(function(){
                            alert(" Order delivered")
                        },12000)
                    },10000)
                },8000)
            },3000)
        },0)
    }
}