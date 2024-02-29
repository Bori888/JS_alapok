window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM=document.querySelectorAll("#f1")[0]
    console.log(ELEM.innerHTML)


}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM2=document.querySelectorAll("#ide")[0]
    ELEM2.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM2=document.querySelectorAll(".ide")[0]
    ELEM2.innerHTML = "<p>Jó reggelt!</p>"

}
function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const LISTA = document.querySelectorAll(".lista")[0]
    let txt="<ul>"
    for(let i = 0;i<5;i++){
        const veletlenSZAM =  Math.floor(Math.random()*21+10) 
        txt+="<li>" + veletlenSZAM + "</li>"

    }
    txt += "</ul>"
    console.log(txt)
    LISTA.innerHTML = txt




}
function elemekFormazasa1() {
    
}

