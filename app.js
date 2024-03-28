

let niz=document.getElementsByClassName("obrisi");

for (const dugme of niz) {
    dugme.addEventListener("click",function(e){
        console.log(this.parentNode);
        let elementZabrisanje=this.parentNode;
        let lista=document.getElementById("lista");
        lista.removeChild(elementZabrisanje);

    })
}

function dodajDestinaciju(event)
{
    event.preventDefault();
    let inputPolje=document.querySelector("#dodaj-destinaciju input");
    let nazivDestinacije=inputPolje.value.trim();
    if(nazivDestinacije)
    {
        let lista=document.getElementById("lista");
        let novaStavka=document.createElement("li");
        novaStavka.innerHTML=`<span class="naziv">${nazivDestinacije}, Brazil</span>
        <span class="obrisi">obriši</span>`;
        lista.appendChild(novaStavka);
        inputPolje.value="";
    }
}
let forma=document.forms["dodaj-destinaciju"];
forma.addEventListener("submit",dodajDestinaciju);