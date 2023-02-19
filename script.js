//your code here
var arr;
var sum = 0;
function addElement(event) {
	event.preventDefault();
	var input = document.getElementById('ele').value;
    var text = String(input); 
	arr = text.split(",");
	//alert(input);
    //console.log(arr[0]);
   
	 calculateMinimumCost();
}
function calculateMinimumCost() {
    
	while (1) {
        //console.log(arr,sum);
		if(arr.length == 1) break;
        arr.sort(function(a,b) {return a-b}) ;
		var ele = Number(arr[0])+Number(arr[1]);
		arr.splice(0,2);
        arr.unshift(ele);
		sum += Number(ele);
        //document.write(arr,sum);
	}
	var val=document.getElementById('result');
	val.textContent = sum;
}