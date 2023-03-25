window.addEventListener("load", init);
const kutyaLista = [
{nev:"Fruzsina", kor:12, fajta: "foxterrier"},
{nev:"Dézi", kor:13, fajta: "kuvasz"},
{nev:"Dodó", kor:8, fajta: "puli"},
{nev:"Bástya", kor:10, fajta: "agár"},
{nev:"Üsri", kor:3, fajta: "újfullandi"},
{nev:"Fruzsa", kor:1, fajta: "keverék"}
]


function init() {

    /**Írjuk ki divekbe és azon belül p tagbe a kutyák fajtáját */
    const ARTICLE = document.querySelectorAll("article")
    let txt = osszeallit()
    //itt helyezzük bele az article elembe
    ARTICLE[0].innerHTML=txt
}

function osszeallit(){
    //összeállítjuk 
    let txt=""
    for (let index = 0; index < kutyaLista.length; index++) {
        txt+=`<div>`
                for (const key in kutyaLista[index]) {
                    txt+=`<p>${kutyaLista[index][key]}</p>`  
                } 
                txt+= `</div>`

    }
    console.log(txt)
    return txt
}
