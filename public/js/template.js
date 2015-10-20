var b;
function inicio()
{
    var Order_A1=document.getElementById("Order-A1");
    var Delivery_A2=document.getElementById("Delivery-A2");
    b=document.getElementById("button");
    b.addEventListener("click", fulfillment);
 }

 function fulfillment(){
 	var A1=Number(Order_A1.value);
 	var A2=Number(Delivery_A2.value);
 	var A3= ((A2-A1)/A1)*100;
 	A3 =document.getElementById("Fulfillment-A3");
 }   