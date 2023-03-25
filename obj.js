window.addEventListener("load",init)
const KUTYAK = [
 {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassag: 52,
    nem: "szuka",
    kor: 13,
},

{
    nev: "Kira",
    fajta: "Yorshire terrier",
    lab: 4,
    marmagassag: 20,
    nem: "szuka",
    kor: 13,
}
]


function init(){
    /**objektum
     * kulcs-érték párok*/
    /*const DEZI = {
        nev: "Dézi",
        fajta: "keverék",
        lab: 4,
        marmagassag: 52,
        nem: "szuka",
        kor: 13,
    }

    const KIRA = {
        nev: "Kira",
        fajta: "Yorshire terrier",
        lab: 4,
        marmagassag: 20,
        nem: "szuka",
        kor: 13,
    }*/
    console.log(KUTYAK[0])
    console.log(KUTYAK[1])
    console.log(KUTYAK[0].nev)
    DEZI.nev= "Béla"
    console.log(KUTYAK[0])
    DEZI.oltas= "van"
    console.log(KUTYAK[0]) 
    delete DEZI.lab
    console.log(KUTYAK[0])

    /**objektumok bejárása for in*/
    for (let index = 0; index < KUTYAK.legth; index++){
        for (const kulcs in KUTYAK[1]) {
        console.log(kulcs,KUTYAK[1][kulcs]);
        }
    }
}