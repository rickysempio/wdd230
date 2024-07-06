document.querySelector("#lastModified").innerHTML = `Last Modification: ${ document.lastModified}`;



document.getElementById("submitButton").addEventListener("click", function() {
    var submitButton = document.getElementById("submitButton");
    submitButton.value = "Submit clicked at " + new Date().toLocaleString(); 
});




















