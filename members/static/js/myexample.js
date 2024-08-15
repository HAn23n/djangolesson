var ajaxRequest; 
function ajaxFunction() {
    try {

       ajaxRequest = new XMLHttpRequest();
    } catch (e) {

       try {
          ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
          try {
             ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {

             alert("Your browser broke!");
             return false;
          }
       }
    }
}


function validateUserId() {
    ajaxFunction();
    ajaxRequest.onreadystatechange = processRequest;
    
    if (!target) target = document.getElementById("userid");
    var url = "validate?id=" + escape(target.value);
    
    ajaxRequest.open("GET", url, true);
    ajaxRequest.send(null);
 }

function displayDoc(){
    var myObj = new XMLHttpRequest();

    myObj.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("sample").innerHTML = this.responseText;
        }else{
            console.log("Error Found")
        }
    };
    myObj.open("GET","https://jsonplaceholder.typicode.com/todos",true)

    myObj.send();
};


function displayRecords(){
    var zhttp = new XMLHttpRequest();

    zhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("example").innerHTML = this.responseText;
        }
    }
    zhttp.open("GET","https://jsonplaceholder.typicode.com/todos/6",true)

    zhttp.send();
}

function sendDoc(){
    var qhttp = new XMLHttpRequest();

    qhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            document.getElementById("sample2").innerHTML = this.responseText;
            console.log("Data Send Successfully")
        }
    };

    qhttp.open("POST", "https://jsonplaceholder.typicode.com/todos",true);

    qhttp.setRequestHeader('Content-type','application/json')

    qhttp.send(JSON.stringify({
        "title": "MONGO",
        "userId": 11,
        "id": 21,
        "body": "est rerum tempore"
    }))
}

function delDoc(){
    var qhttp = new XMLHttpRequest();

    qhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("sample3").innerHTML = this.responseText;
            console.log("Record Deleted Successfully")
        }
    };

    qhttp.open("DELETE", "https://jsonplaceholder.typicode.com/todos/2", true);
    qhttp.send();

}

function handleResponse(){
    var qhttp = new XMLHttpRequest()

    qhttp.onreadystatechange = function(){
        if(qhttp.readyState == 4){
            if(qhttp.status == 200){
                console.log(qhttp.responseText)
            }else{
                console.log("Found Error: ",qhttp.status)
            }
        }
    };
    qhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    qhttp.send()
}

function getBinaryData() {
    // Creating XMLHttpRequest object
    var myhttp = new XMLHttpRequest();
    // Getting binary data
    myhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // Set responseType to arraybuffer.
    myhttp.responseType = "arraybuffer";
    // Creating call back function
    myhttp.onload = (event) => {
       // IF the request is successful
       if (myhttp.status === 200){
          var arraybuffer = myhttp.response;
          // Convert the arraybuffer into array
          var data =  new Uint8Array(arraybuffer);
          // Display the binary data
          document.getElementById("example2").innerHTML = data;
          console.log("Binary data Received");
       }else{
          console.log("Found error");
       }
    };
    // Sending the request to the server
    myhttp.send();
 } 

 function sendFormData() {
    // Creating XMLHttpRequest object
    var zhttp = new XMLHttpRequest();
    const mFormEle = document.querySelector("#mForm")
    // Creating FormData object
    const myForm = new FormData(mFormEle);
    // Creating call back function to handle the response
    zhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("example").innerHTML = this.responseText;
          console.log("Form Data Posted Successfully")
       }
    };
    // Post/Add form data on the server
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    // Sending the request to the server
    zhttp.send(new FormData(mFormEle));
 }

//  const myButton = document.querySelector('#btn2');
//  myButton.addEventListener('click', () => {
//     // Get all the input files in DOM with attribute type "file":
//     const inputFiles = document.querySelectorAll('input[type="file"]');
 
//     // Add input files in the array 
//     const myfiles = [];
//     inputFiles.forEach((inputFiles) => myfiles.push(inputFiles.files[0]));
 
//     // Creating a FormData
//     const myformdata = new FormData();
 
//     // Append files in the FormData object
//     for (const [index, file] of myfiles.entries()){
//        // It contained reference name, file, set file name
//        myformdata.append(`file${index}`, file, file.name);
//     }
//     // Creating an XMLHttpRequest object
//     var myhttp = new XMLHttpRequest();
 
//     // Callback function
//     // To handle the response
//     myhttp.onreadystatechange = function(){
//        if (myhttp.readyState == 4 && myhttp.status == 200) {
//           console.log("File uploaded Successfully")
//        }
//     };
//     // Open the connection with the web server
//     myhttp.open("POST", "https://httpbin.org/post", true);
 
//     // Setting headers
//     myhttp.setRequestHeader("Content-Type", "multipart/form-data");
 
//     // Sending file to the server
//     myhttp.send(myformdata);
//  })


 function dataDoc(){

    var zhttp = new XMLHttpRequest();

    const myForm = new FormData();

    myForm.append("tile","AJAX Tutorial")
    myForm.append("UserId","232")
    myForm.append("Body","It is for web development")
    myForm.append("Age","33")

    zhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            document.getElementById("example4").innerHTML = this.responseText
            console.log("Form Data Posted Successfully")
        }
    };

    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);

    zhttp.send(myForm);

}

function sendFormData() {
    // Creating XMLHttpRequest object
    var zhttp = new XMLHttpRequest();
 
    // Creating FormData object
    const myForm = new FormData();
 
    // Assigning the form data with key/value pair
    myForm.append("title", document.querySelector('#Utitle').value)
    myForm.append("UserId", document.querySelector('#UId').value)
    myForm.append("Body", document.querySelector('#Ubody').value)
    myForm.append("Age", document.querySelector('#Uage').value)
 
    // Creating call back function to handle the response
    zhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("example").innerHTML = this.responseText;
          console.log("Form Data Posted Successfully")
       }
    };
    // Post/Add form data on the server
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
 
    // Sending the request to the server
    zhttp.send(myForm);
}

function sendRecords() {
    // Creating XMLHttpRequest object
    var zhttp = new XMLHttpRequest();
 
    // JSON document
    const mParameters = {
       title: document.querySelector('input[name="title"]').value,
       userid: document.querySelector('input[name="UserID"]').value,
       body: document.querySelector('input[name="body"]').value
    }
    // Creating call back function
    zhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
          document.getElementById("example7").innerHTML = this.responseText;
          console.log("Data Posted Successfully")
       } else {
          console.log("Error found")
       }
    };
    // Post/Add JSON document on the given API
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
 
    // Setting HTTP request header 
    zhttp.setRequestHeader('Content-type', 'application/json')
 
    // Sending the request to the server
    zhttp.send(JSON.stringify(mParameters));
 }
 

function updateDoc(){
    var uhttp = new XMLHttpRequest();

    uhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('sm1').innerHTML = this.responseText
            console.log("Data update Successfully")
        }
    };

    uhttp.open("PUT", "https://jsonplaceholder.typicode.com/todos/21", true);
    uhttp.setRequestHeader('Content-type','application/json')
    uhttp.send(JSON.stringify({
        "title": "ApplePie",
        "userId": 12,
        "id": 32,
        "body": "ApplePie is made up of Apple"
    }))
}


function sendDoc2(){
    var qhttp = new XMLHttpRequest();

    qhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            document.getElementById('sm3').innerHTML = this.responseText
            console.log("JSON Data Send Successfully")
        }
    };

    qhttp.open("POST","https://jsonplaceholder.typicode.com/todos",true)

    qhttp.setRequestHeader('Content-type','application/json')

    qhttp.send(JSON.stringify({
        "title": "Mickey",
        "userId": 11,
        "id": 21,
        "body": "Mickey lives in london"
    }));

}

function sendDataObject(){
    var qhttp = new XMLHttpRequest();

    var myDataObject ={
        "name": "Monkia",
        "City": "Delhi",
        "Age": 32,
        "Contact Number": 69696969
    }

    qhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            document.getElementById("sm4").innerHTML = this.responseText
            console.log("Data object Send Succuessfully")
        }
    };

    qhttp.open("POST","https://jsonplaceholder.typicode.com/todos", true);

    qhttp.setRequestHeader('Content-type', 'application/json')

    var myData = JSON.stringify(myDataObject)

    qhttp.send(myData)
}


function displayStatus() {
    var myObj = new XMLHttpRequest();

    myObj.onprogress = function(myEvent){
        if(myEvent.lengthComputable){
            var dataTarnsferPercentage = (myEvent.loaded/myEvent.total)*100;
            console.log("Current progress of the data transfer: ",dataTarnsferPercentage)
        }
    };

    myObj.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    myObj.send();

}

function displayStatus2() {
    // Creating XMLHttpRequest object
    var myObj = new XMLHttpRequest();
 
    // Creating call back function
    // Here onreadystatechange return the current state of the resuest
    myObj.onreadystatechange = function() {
       if (this.readyState == XMLHttpRequest.DONE){
          console.log("Request is completed")
       }else{
          console.log("Request is in-progress")
       }
    };
    // Open the given file
    myObj.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
 
    // Sending the request to the server
    myObj.send();
}


function ShowDoc() {
    var myhttp = new XMLHttpRequest();

    myhttp.onreadystatechange = function(){
        if(this.status == 200){
            console.log("Found the requested data")
            document.getElementById("ex2").innerHTML = this.responseText
        }

        else if(this.status == 404){
            console.log("Found error")
        }
    };

    myhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/3", true);

    myhttp.send();
}
 
function ajaxFunction2(){
    var ajaxRequest;

    try {
        ajaxRequest = new XMLHttpRequest();
    }catch (e){
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e){
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                alert("Your browser broke!");
                return false;
            }
        }
    }
}