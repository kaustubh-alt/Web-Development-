var a = document.getElementById("view")

var z = localStorage.getItem('link')
console.log(z)
document.getElementById("til").innerText = z

fetch("data/"+z+'.txt')
  .then(response => response.text())
  .then(text => ass(text))

function ass(b){
  a.innerText = b;  
}

var c = document.getElementById("video");
c.src="vid/"+z+".mp4";
console.log(document.getElementById("video").src)
