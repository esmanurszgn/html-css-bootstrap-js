const body = document.querySelector("body");
const tıkla = document.querySelector(".mod");
const simge = document.querySelector(".bi");
const paragraf = document.getElementById("paragraf")



simge.addEventListener("click",modDegistir);

function modDegistir(){
    tıkla.classList.toggle("koyu-mod");
   

    if(tıkla.classList.contains("koyu-mod")){
        body.style = "background-color:black; color:white;";
        paragraf.style = "color:black";
        simge.classList.remove("bi-brightness-alt-high");
        simge.classList.add("bi-moon");
    }
    else {

        body.style = "background-color:white; color:black";
        simge.classList.remove("bi-moon");
        simge.classList.add("bi-brightness-alt-high");
        


    }
    

}