function checkform() {
    if (document.getElementById("name").value == 'Lara' 
    || document.getElementById("name").value == 'lara' 
    || document.getElementById("name").value == 'LARA'){
        setTimeout(function() {document.location.href="page.html" });
    }

    else{
        alert("Unijeli ste netačne podatke");
        setTimeout(function() {document.location.href="index.html" });

    }
}