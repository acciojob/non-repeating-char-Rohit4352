function myFunction(str) {
  let str = prompt("Enter a string");
	let res;
  if (str != null) {
    document.getElementById("demo").innerHTML = str;
	res = str;  
  }
	alert(res);
}