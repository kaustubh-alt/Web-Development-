const a = localStorage.getItem('prod');
console.log(a)
neaw(a)
function neaw(c){
  console.log(c)
  fetch("data/"+c+'.txt')
  .then(response => response.text())
  .then(text => ass(text))

  function ass(a){
    const temp = a
    
    var lines = temp.split('\n');
    title.innerHTML = lines[0]

    document.getElementById("image").src="png/"+lines[0].replaceAll(" ","").toLowerCase().trim()+".jpg"
    p1.innerHTML = lines[1]
    p2.innerHTML = lines[2]
    p3.innerHTML = lines[3]
    p4.innerHTML = lines[4]
    p5.innerHTML = lines[5]
    p6.innerHTML = lines[6]       
    p7.innerHTML = lines[7]
    p8.innerHTML = lines[8]
  }
}


