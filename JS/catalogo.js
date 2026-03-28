let music = {
    "Funk":{
        "1":{
            "Img":"../Img/Funk/EAW.jpg",
            "Name":"Greatest hits",
            "BName":"Earth Wind & Fire",
            "MusicUrl":"../Audio/Funk/"
        },
        "2":{
            "Img":"../Img/Funk/MontagemDirecao.jpg",
            "Name":"Montagem Direcao",
            "BName":"DJ FKU",
            "MusicUrl":"../Audio/Funk/"
        },
        "3":{
            "Img":"../Img/Funk/MontagemFavela.jpg",
            "Name":"Montagem Favela",
            "BName":"CHASHKAKEFIRA",
            "MusicUrl":"../Audio/Funk/"
        },
        "4":{
            "Img":"../Img/Funk/MontagemRugada.jpg",
            "Name":"Montagem Rugada",
            "BName":"JXNDRO",
            "MusicUrl":"../Audio/Funk/MONTAGEMRUGADA.mp3"
        },
        "5":{
            "Img":"../Img/Funk/MontagemXonada.jpg",
            "Name":"Montagem Xonada",
            "BName":"DJ Samir",
            "MusicUrl":"../Audio/Funk/MONTAGEMXONADA.mp3"
        },
        "6":{
            "Img":"../Img/Funk/NoBatidao.jpg",
            "Name":"No Batidao",
            "BName":"ZXKAI",
            "MusicUrl":"../Audio/Funk/"
        },
        "7":{
            "Img":"../Img/Funk/VoceNaMiraJumpStyle.jpg",
            "Name":"Voce Na Mira JumpStyle",
            "BName":"Sxilwix",
            "MusicUrl":"../Audio/Funk/"
        },
        "8":{
            "Img":"../Img/Funk/Vulfpeck.jpg",
            "Name":"Clarity of Cal",
            "BName":"Vulfpeck",
            "MusicUrl":"../Audio/Funk/"
        },
    },
    "Rock en español":{
        "1":{
            "Img":"../Img/RockEspañol/Re.jpg",
            "Name":"Re",
            "BName":"Cafe Tacvba",
            "MusicUrl":"../Audio/"
        },
        "2":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "3":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "4":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "5":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "6":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "7":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
        "8":{
            "Img":"../Img/RockEspañol/",
            "Name":"",
            "BName":"",
            "MusicUrl":""
        },
    },
    "Metal":{
        "1":{
            "Img":"../Img/Metal/RideTheLighting.png",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "2":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "3":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "4":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "5":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "6":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "7":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
        "8":{
            "Img":"../Img/Metal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/Metal/"
        },
    },
    "Nu Metal":{
        "1":{
            "Img":"../Img/NuMetal/Fallen.png",
            "Name":"Fallen",
            "BName":"Evanescence",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "2":{
            "Img":"../Img/NuMetal/Hipnotize.jpg",
            "Name":"Hipnotize",
            "BName":"System of a down",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "3":{
            "Img":"../Img/NuMetal/Immortalized.jpg",
            "Name":"Immortalizaded",
            "BName":"Disturbed",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "4":{
            "Img":"../Img/NuMetal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "5":{
            "Img":"../Img/NuMetal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "6":{
            "Img":"../Img/NuMetal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "7":{
            "Img":"../Img/NuMetal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/NuMetal/"
        },
        "8":{
            "Img":"../Img/NuMetal/",
            "Name":"",
            "BName":"",
            "MusicUrl":"../Audio/NuMetal/"
        },
    }
}
var DJ = new Audio()
document.addEventListener('DOMContentLoaded',set("Funk"))
function set(a){
    let port = document.querySelectorAll(".item")
    let ind = 1
    port.forEach(Element=>{
        Element.children.item(1).innerHTML = music[a][ind].Name
        Element.children.item(2).innerHTML = music[a][ind].BName
        ind++
    })
    ind = 1
    let img = document.querySelectorAll(".tape")
    img.forEach(Element=>{
        Element.setAttribute("src",music[a][ind].Img)
        ind++
    })
    ind = 1
    let tape = document.querySelectorAll(".play")
    tape.forEach(Element=>{
        Element.id = music[a][ind].MusicUrl
        ind++
        Element.addEventListener("click",()=>{
            DJ.pause()
            DJ.src = Element.id
            DJ.play()
        })
    })
}