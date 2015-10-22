var b;
var RangoMax=120;
var RangoMin=80;
function inicio()
{
    var Order_A1=document.getElementById("Order_A1");
    var Delivery_A2=document.getElementById("Delivery_A2");
    var Order_B1=document.getElementById("Order_B1");
    var Delivery_B2=document.getElementById("Delivery_B2");
    var Order_C1=document.getElementById("Order_C1");
    var Delivery_C2=document.getElementById("Delivery_C2");
    var Order_D1=document.getElementById("Order_B1");
    var Delivery_D2=document.getElementById("Delivery_D2");
    var Order_E1=document.getElementById("Order_E1");
    var Delivery_E2=document.getElementById("Delivery_E2");
    var Order_F1=document.getElementById("Order_F1");
    var Delivery_F2=document.getElementById("Delivery_F2");
    var Order_G1=document.getElementById("Order_G1");
    var Delivery_G2=document.getElementById("Delivery_G2");
    var Order_H1=document.getElementById("Order_H1");
    var Delivery_H2=document.getElementById("Delivery_H2");
    var Order_I1=document.getElementById("Order_I1");
    var Delivery_I2=document.getElementById("Delivery_I2");
    var Order_J1=document.getElementById("Order_J1");
    var Delivery_J2=document.getElementById("Delivery_J2");
    var Order_K1=document.getElementById("Order_K1");
    var Delivery_K2=document.getElementById("Delivery_K2");
    var Order_L1=document.getElementById("Order_L1");
    var Delivery_L2=document.getElementById("Delivery_L2");
    var Order_M1=document.getElementById("Order_M1");
    var Delivery_M2=document.getElementById("Delivery_M2");
    var Order_N1=document.getElementById("Order_N1");
    var Delivery_N2=document.getElementById("Delivery_N2");
    var Order_O1=document.getElementById("Order_O1");
    var Delivery_O2=document.getElementById("Delivery_O2");
    var Order_P1=document.getElementById("Order_P1");
    var Delivery_P2=document.getElementById("Delivery_P2");
    var Order_Q1=document.getElementById("Order_Q1");
    var Delivery_Q2=document.getElementById("Delivery_Q2");
    var Order_R1=document.getElementById("Order_R1");
    var Delivery_R2=document.getElementById("Delivery_R2");
    var Order_S1=document.getElementById("Order_S1");
    var Delivery_S2=document.getElementById("Delivery_S2");
    var Order_T1=document.getElementById("Order_T1");
    var Delivery_T2=document.getElementById("Delivery_T2");
    var Order_U1=document.getElementById("Order_U1");
    var Delivery_U2=document.getElementById("Delivery_U2");
    var Order_V1=document.getElementById("Order_V1");
    var Delivery_V2=document.getElementById("Delivery_V2");
    var Order_W1=document.getElementById("Order_W1");
    var Delivery_W2=document.getElementById("Delivery_W2");
    var Order_X1=document.getElementById("Order_X1");
    var Delivery_X2=document.getElementById("Delivery_X2");
    var Order_Y1=document.getElementById("Order_Y1");
    var Delivery_Y2=document.getElementById("Delivery_Y2");
    var Order_Z1=document.getElementById("Order_Z1");
    var Delivery_Z2=document.getElementById("Delivery_Z2");
    var Order_total=document.getElementById("Order_total");
    var Delivery_total=document.getElementById("Delivery_total");
    var fulfillment_total=document.getElementById("fulfillment_total");

    b=document.getElementById("button");
    b.addEventListener("click", fulfillment);
 }

 function fulfillment(){
 	var A1=Number(Order_A1.value);
 	var A2=Number(Delivery_A2.value);
 	var B1=Number(Order_B1.value);
 	var B2=Number(Delivery_B2.value);
 	var C1=Number(Order_C1.value);
 	var C2=Number(Delivery_C2.value);
 	var D1=Number(Order_D1.value);
 	var D2=Number(Delivery_D2.value);
 	var E1=Number(Order_E1.value);
 	var E2=Number(Delivery_E2.value);
 	var F1=Number(Order_F1.value);
 	var F2=Number(Delivery_F2.value);
 	var G1=Number(Order_G1.value);
 	var G2=Number(Delivery_G2.value);
 	var H1=Number(Order_H1.value);
 	var H2=Number(Delivery_H2.value);
 	var I1=Number(Order_I1.value);
 	var I2=Number(Delivery_I2.value);
 	var J1=Number(Order_J1.value);
 	var J2=Number(Delivery_J2.value);
 	var K1=Number(Order_K1.value);
 	var K2=Number(Delivery_K2.value);
 	var L1=Number(Order_L1.value);
 	var L2=Number(Delivery_L2.value);
 	var M1=Number(Order_M1.value);
 	var M2=Number(Delivery_M2.value);
 	var N1=Number(Order_N1.value);
 	var N2=Number(Delivery_N2.value);
 	var O1=Number(Order_O1.value);
 	var O2=Number(Delivery_O2.value);
 	var P1=Number(Order_P1.value);
 	var P2=Number(Delivery_P2.value);
 	var Q1=Number(Order_Q1.value);
 	var Q2=Number(Delivery_Q2.value);
 	var R1=Number(Order_R1.value);
 	var R2=Number(Delivery_R2.value);
 	var S1=Number(Order_S1.value);
 	var S2=Number(Delivery_S2.value);
 	var T1=Number(Order_T1.value);
 	var T2=Number(Delivery_T2.value);
 	var U1=Number(Order_U1.value);
 	var U2=Number(Delivery_U2.value);
 	var V1=Number(Order_V1.value);
 	var V2=Number(Delivery_V2.value);
 	var W1=Number(Order_W1.value);
 	var W2=Number(Delivery_W2.value);
 	var X1=Number(Order_X1.value);
 	var X2=Number(Delivery_X2.value);
 	var Y1=Number(Order_Y1.value);
 	var Y2=Number(Delivery_Y2.value);
 	var Z1=Number(Order_Z1.value);
 	var Z2=Number(Delivery_Z2.value);
 	var Totalorder=Number(Order_total.value);
 	var TotalDelivery=Number(Delivery_total.value);
 	var TotalFulfillment=Number(Fulfillment_total.value);
 
 	var Total_order = A1+B1+C1+D1+E1+F1+G1+H1+I1+J1+K1+L1+M1+N1+O1+P1+Q1+R1+S1+T1+U1+V1+W1+X1+Y1+Z1;
 	var Total_Delivery = A2+B2+C2+D2+E2+F2+G2+H2+I2+J2+K2+L2+M2+N2+O2+P2+Q2+R2+S2+T2+U2+V2+W2+X2+Y2+Z2;

 	document.getElementById("Order_total").value=Total_order;
 	document.getElementById("Delivery_total").value=Total_Delivery;

 	if(Total_order>"" && Total_Delivery>""){
	var TotalFulfillment= (Total_Delivery/Total_order)*100;
	var t= TotalFulfillment.toFixed(1);
	document.getElementById("Fulfillment_total").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_total").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_total").className = "test";
	}
	
 	}

 	
 	if(A1>"" && A2>""){
	var A3= (A2/A1)*100;
	var t= A3.toFixed(1);
	document.getElementById("Fulfillment_A3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_A3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_A3").className = "test";
	}

 	}
 	if(B1>"" && B2>""){
	var B3= (B2/B1)*100;
	var t= B3.toFixed(1);
	document.getElementById("Fulfillment_B3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_B3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_B3").className = "test";
	}
 	}
 	if(C1>"" && C2>""){
	var C3= (C2/C1)*100;
	var t= C3.toFixed(1);
	document.getElementById("Fulfillment_C3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_C3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_C3").className = "test";
	}
 	}
 	if(D1>"" && D2>""){
	var D3= (D2/D1)*100;
	var t= D3.toFixed(1);
	document.getElementById("Fulfillment_D3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_D3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_D3").className = "test";
	}
 	}
 	if(E1>"" && E2>""){
	var E3= (E2/E1)*100;
	var t= E3.toFixed(1);
	document.getElementById("Fulfillment_E3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_E3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_E3").className = "test";
	}
 	}
 	if(F1>"" && F2>""){
	var F3= (F2/F1)*100;
	var t= F3.toFixed(1);
	document.getElementById("Fulfillment_F3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_F3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_F3").className = "test";
	}
 	}
 	
 	if(G1>"" && G2>""){
	var G3= (G2/G1)*100;
	var t= G3.toFixed(1);
	document.getElementById("Fulfillment_G3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_G3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_G3").className = "test";
	}
 	}
 	if(H1>"" && H2>""){
	var H3= (H2/H1)*100;
	var t= H3.toFixed(1);
	document.getElementById("Fulfillment_H3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_H3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_H3").className = "test";
	}
 	}
 	if(I1>"" && I2>""){
	var I3= (I2/I1)*100;
	var t= I3.toFixed(1);
	document.getElementById("Fulfillment_I3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_I3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_I3").className = "test";
	}
 	}
 	if(J1>"" && J2>""){
	var J3= (J2/J1)*100;
	var t= J3.toFixed(1);
	document.getElementById("Fulfillment_J3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_J3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_J3").className = "test";
	}
 	}
 	if(J1>"" && K2>""){
	var K3= (K2/K1)*100;
	var t= K3.toFixed(1);
	document.getElementById("Fulfillment_K3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_K3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_K3").className = "test";
	}
 	}
 	if(L1>"" && L2>""){
	var L3= (L2/L1)*100;
	var t= L3.toFixed(1);
	document.getElementById("Fulfillment_L3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_L3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_L3").className = "test";
	}
 	}
 	if(M1>"" && M2>""){
	var M3= (M2/M1)*100;
	var t= M3.toFixed(1);
	document.getElementById("Fulfillment_M3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_M3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_M3").className = "test";
	}
 	}
 	if(N1>"" && N2>""){
	var N3= (N2/N1)*100;
	var t= N3.toFixed(1);
	document.getElementById("Fulfillment_N3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_N3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_N3").className = "test";
	}
 	}
 	if(O1>"" && O2>""){
	var O3= (O2/O1)*100;
	var t= O3.toFixed(1);
	document.getElementById("Fulfillment_O3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_O3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_O3").className = "test";
	}
 	}
 	if(P1>"" && P2>""){
	var P3= (P2/P1)*100;
	var t= P3.toFixed(1);
	document.getElementById("Fulfillment_P3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_P3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_P3").className = "test";
	}
 	}
 	if(Q1>"" && Q2>""){
	var Q3= (Q2/Q1)*100;
	var t= Q3.toFixed(1);
	document.getElementById("Fulfillment_Q3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_Q3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_Q3").className = "test";
	}
 	}
 	if(R1>"" && R2>""){
	var R3= (R2/R1)*100;
	var t= R3.toFixed(1);
	document.getElementById("Fulfillment_R3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_R3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_R3").className = "test";
	}
 	}
 	if(S1>"" && S2>""){
	var S3= (S2/S1)*100;
	var t= S3.toFixed(1);
	document.getElementById("Fulfillment_S3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_S3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_S3").className = "test";
	}
 	}
 	if(T1>"" && T2>""){
	var T3= (T2/T1)*100;
	var t= T3.toFixed(1);
	document.getElementById("Fulfillment_T3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_T3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_T3").className = "test";
	}
 	}
 	if(U1>"" && U2>""){
	var U3= (U2/U1)*100;
	var t= U3.toFixed(1);
	document.getElementById("Fulfillment_U3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_U3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_U3").className = "test";
	}
 	}
 	if(V1>"" && V2>""){
	var V3= (V2/V1)*100;
	var t= V3.toFixed(1);
	document.getElementById("Fulfillment_V3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_V3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_V3").className = "test";
	}
 	}
 	if(W1>"" && W2>""){
	var W3= (W2/W1)*100;
	var t= W3.toFixed(1);
	document.getElementById("Fulfillment_W3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_W3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_W3").className = "test";
	}
 	}
 	if(X1>"" && X2>""){
	var X3= (X2/X1)*100;
	var t= X3.toFixed(1);
	document.getElementById("Fulfillment_X3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_X3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_X3").className = "test";
	}
 	}
 	if(Y1>"" && Y2>""){
	var Y3= (Y2/Y1)*100;
	var t= Y3.toFixed(1);
	document.getElementById("Fulfillment_Y3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_Y3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_Y3").className = "test";
	}
 	}
 	if(Z1>"" && Z2>""){
	var Z3= (Z2/Z1)*100;
	var t= Z3.toFixed(1);
	document.getElementById("Fulfillment_Z3").value=t+"%";
	if(t>RangoMax){
		document.getElementById("Fulfillment_Z3").className = "test";
	}
	if(t<RangoMin){
		document.getElementById("Fulfillment_Z3").className = "test";
	}
	
 	}
 	
}

		
	
	


  