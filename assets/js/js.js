var penz = 0
var kattszorzo = 1

function Click() 
{
    penz += 1*kattszorzo
    document.getElementById("score").innerText = penz.toFixed(2)
}








var KMPLvl = 0
var KMPAr = 25
function KMP() 
{
    
    if (penz < parseInt(document.getElementById("KattMultiPAr").innerText)) {
        alert("Nincs elég pánzed ehez :(")
    }
    else
    {
        
        kattszorzo += 0.1
        KMPLvl++
        document.getElementById("KMPLvl").innerText = KMPLvl 
        penz = penz-parseInt(document.getElementById("KattMultiPAr").innerText)
        document.getElementById("score").innerText = penz.toFixed(2)
        KMPAr = KMPAr*1.25
        document.getElementById("KattMultiPAr").innerText = KMPAr.toFixed(2)
    }
}

var ACLvl = 0
var ACAmount = 5000
var ACAr = 2000
function AC() {
    if (penz < parseInt(document.getElementById("AutoClickerAr").innerText)) {
        alert("Nincs elég pánzed ehez :(")
    }
    else
    {
        ACAmount = ACAmount-10
        ACLvl++
        ACAr = ACAr*0.05
        document.getElementById("AutoClickerAr").innerText = ACAr 
        penz = penz-parseInt(document.getElementById("AutoClickerAr").innerText)
        document.getElementById("score").innerText = penz.toFixed(2)
        document.getElementById("ACLvl").innerText = ACLvl 
    }
    setInterval(() => {
        Click()  
    }, ACAmount);    
}
