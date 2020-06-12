console.log(localStorage)
document.getElementById("next2").style.display = "none";
document.getElementById("next3").style.display = "none";
pos1 = []
pos2 = []
pos3 = []

current_phrase = ""

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById('inputfile') 
.addEventListener('change', function() {   
        var fr=new FileReader(); 
        var f = this.files[0]
        fr.onload=function(){ 
            //document.getElementById('output') 
            //        .textContent=fr.result; 
            setLocalStorage(f.name, fr.result)
        } 
        fr.readAsText(this.files[0]); 
    }) 

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

function setLocalStorage(file_name, text) {
  file_name = file_name.split(".")[0]
  counter=0
  text=text.split("\n")
  console.log(text)
  console.log(text.length)
  localStorage.setItem(file_name, text.length)
  for(var s in text) {
    console.log(JSON.stringify(text[s].split(" ")))
    localStorage.setItem(file_name + " " + s, JSON.stringify(text[s].split(" ")))
    console.log(JSON.parse(localStorage.getItem(file_name + " " + s)))
  }
  console.log(localStorage)
  pickWord(file_name)
}

function pickWord(file_name) {
  var nums = parseInt(localStorage.getItem(file_name))
  console.log(nums)
  var word_num = getRandomInt(nums)
  var word = JSON.parse(localStorage.getItem(file_name + " " + word_num))
  console.log(word)
  return word
}

function parseText() {
  reset_visibility()
  var text = document.getElementById("phrase").value
  texts = text.split("+")
  pos1 = new Array(texts.length)
  pos2 = new Array(texts.length)
  pos3 = new Array(texts.length)
  for(var s in texts) {
    list = pickWord(texts[s])
    pos1[s] = list[0]
    pos2[s] = list[1]
    pos3[s] = list[2]
  }
  displayResult1()
}

function reset_visibility() {
  document.getElementById("next2").style.display = "none";
  document.getElementById("next3").style.display = "none";
  document.getElementById("output").innerHTML=""
  document.getElementById("output2").innerHTML=""
  document.getElementById("output3").innerHTML=""
}


function displayResult1() {
  var result = pos1.join("")
  console.log(result)
  e = document.getElementById("output")
  e.innerHTML=result
  document.getElementById("next2").style.display = "block";
}

function displayResult2() {
  var old_result = pos1.join(" ")
  e = document.getElementById("output")
  e.innerHTML=old_result
  
  var result = pos2.join(" ")
  e = document.getElementById("output2")
  e.innerHTML=result
  document.getElementById("next3").style.display = "block";
  document.getElementById("next2").style.display = "None";
}

function displayResult3() {
  var result = pos3.join(" ")
  e = document.getElementById("output3")
  e.innerHTML=result
  document.getElementById("next2").style.display = "none";
  document.getElementById("next3").style.display = "none";
}