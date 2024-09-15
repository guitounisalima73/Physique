let bopen = document.querySelector("#linkopen");
let bclose = document.querySelector("#btnclose");
let btrim1 = document.querySelector("#btntrim1");
let btrim2 = document.querySelector("#btntrim2");
let btrim3 = document.querySelector("#btntrim3");

function afficher() {
    document.querySelector('#popupx').style.display="flex"
}

function masquer() {
    document.querySelector('#popupx').style.display="none"
}

bopen.addEventListener("click",afficher)
bclose.addEventListener("click",masquer)


function executeaction(){
   if ((docpedag.value==="bonjour" && filiere==="bonsoir"))
   {
    alert("ok");
    window.open("www.google.com")
   }
   else
   {alert("non ok")
   window.open("www.yahoo.com")
   }
}

