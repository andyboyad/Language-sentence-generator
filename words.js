document.getElementById('inputfile') 
.addEventListener('change', function() {   
        var fr=new FileReader(); 
        fr.onload=function(){ 
            document.getElementById('output') 
                    .textContent=fr.result; 
        } 
          
        fr.readAsText(this.files[0]); 
    }) 

function wordStuff() {
    var input = document.getElementById("phrase").value
    console.log("This: " + input)
    loadFile("test1.txt")
}

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