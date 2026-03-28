let msg = {
    "Mensajes":{
        "1":{
            "Msg":"La música puede curar las heridas que la medicina no puede tocar.",
            "Name":"Debasish Mridha"
        },
        "2":{
            "Msg":"Hay dos formas de refugiarse de las miserias de la vida: la música y los gatos",
            "Name":"Albert Schweitzer"
        },
        "3":{
            "Msg":"Sin música, la vida sería un error",
            "Name":"Nietzsche"
        },
        "4":{
            "Msg":"La música puede cambiar el mundo porque puede cambiar a las personas",
            "Name":"Bono"
        },
        "5":{
            "Msg":"La música es una mayor revelación que toda la sabiduría y la filosofía",
            "Name":"Ludwig van Beethoven"
        },
        "6":{
            "Msg":"Todos los escritores que conozco preferirían ser músicos",
            "Name":"Kurt Cobain"
        },
        "7":{
            "Msg":"La música es un arma en la guerra contra la infelicidad",
            "Name":"Jason Mraz."
        },
        "8":{
            "Msg":"La música es el tipo de arte que está más cerca de las lágrimas y la memoria",
            "Name":"Oscar Wilde"
        },
        "9":{
            "Msg":"La música es el lenguaje universal de la humanidad",
            "Name":"Henry Hadsworth Longfellow"
        },
        "10":{
            "Msg":"La música produce un tipo de placer sin el que la naturaleza humana no puede vivir",
            "Name":"Confucio"
        },
        "11":{
            "Msg":"Gracias.....totales",
            "Name":"Gustavo Cerati"
        },
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    let ran = Math.floor(Math.random()*11)+1
    document.getElementById("title").innerText = '"' + msg.Mensajes[ran].Msg + '"'
    document.getElementById("name").innerText = "-"+msg.Mensajes[ran].Name
})
var index = 0
var playlist = ["Audio/siNoEstasAqui.mp3","Audio/BringMeToLife.mp3","Audio/Dreaming.mp3","Audio/NoEraAmor.mp3","Audio/OyeMiAmor.mp3"]
var plato = new Audio(playlist[index])
let dura = plato.duration
let barra = document.getElementById("progress")
    let play = document.getElementById("play")
    play.addEventListener("click",()=>{
        console.log(plato.currentTime)
        plato.play()
        play.setAttribute("src","Img/Pause.png")
    })
    play.addEventListener("dblclick",()=>{
        plato.pause()
        play.setAttribute("src","Img/Play.png")
    })
setInterval(() => {
    dura = plato.duration
    console.clear()
    console.log("En total dura ",dura)
    console.log("Justo ahora lleva ",plato.currentTime)
    barra.style.width = (plato.currentTime/dura)*100 + "%"
}, 100)
document.getElementById("bck").addEventListener("click",()=>{
    plato.currentTime = 0
})

document.getElementById("bck").addEventListener("dblclick",()=>{
    if(index <=0) index=4
    else index--
    plato.src = playlist[index]
    plato.currentTime = 0
    plato.play()
    alert(index)
})

document.getElementById("nxt").addEventListener("click",()=>{
    if(index >=4) index=0
    else index++
    plato.src = playlist[index]
    plato.currentTime = 0
    plato.play()
    alert(index)
})