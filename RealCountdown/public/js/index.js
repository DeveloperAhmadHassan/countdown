function myFunction() {
    document.getElementById("myDIV2").style.display="none";
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


document.getElementById("myDIV2").style.display="none";

function myFunction2() {
    document.getElementById("myDIV").style.display="none";
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

window.addEventListener("load", ()=>{

    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    localStorage.setItem("user",JSON.stringify({
        email,
        name
    }))
})

