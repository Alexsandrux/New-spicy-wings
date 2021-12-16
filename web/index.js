function alertare() {
    alert("Logare finalizata cu succes!");
}



document.getElementById("logare").onclick = alertare;

function main() {
}


function rendeaza(hashKey = window.location.hash) {
    let pages = document.querySelectorAll(".pagina");
    for (let i = 0; i < pages.length; ++i) {
        pages[i].style.display = "none";
    }

    switch (hashKey) {
        case "":
            pages[0].style.display = "block";
            break;
        case "#home":
            pages[0].style.display = "block";
            break;
        case "#cursuri":
            pages[1].style.display = "block";
            break;
        case "#seminarii":
            pages[2].style.display = "block";
            break;
    }
}