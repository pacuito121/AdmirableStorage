let index = 1
let cata = {
    "Nombres":{
        "1":"El Cuarteto de Nos",
        "2":"DJ K",
        "3":"Black Sabbath",
        "4":"Evanescence",
        "5":"El Tri",
        "6":"Earth Wind & Fire",
        "7":"Iron Maiden",
        "8":"Skindred",
        "9":"Cafe Tacvba",
        "10":"Vulfpeck",
        "11":"Metallica",
        "12":"System of a down",
        "13":"Molotov",
        "14":"Rata blanca",
        "15":"Linkin park"
    },
    "Genero":{
        "1":"Rock en español",
        "2":"Funk",
        "3":"Metal",
        "4":"Nu Metal",
        "5":"Rock en español",
        "6":"Funk",
        "7":"Metal",
        "8":"Nu Metal",
        "9":"Rock en Español",
        "10":"Funk",
        "11":"Metal",
        "12":"Nu Metal",
        "13":"Rock en Español",
        "14":"Metal",
        "15":"Nu Metal"
    },
    "Descripcion":{
        "1":"Desde Uruguay, redefinieron lo que significa escribir letras en el rock latino. Son genios de la rima rápida, el humor negro, la ironía y la sátira psicológica. Su relevancia actual explotó al mezclar bases de rock alternativo con una entrega vocal casi hip-hopera (especialmente a partir de su aclamado disco Raro), atrayendo a nuevas generaciones gracias a sus letras existenciales con las que es muy fácil identificarse.",
        "2":"Es uno de los verdaderos arquitectos del sonido agresivo que domina el Montagem actual. Nacido en las favelas de Brasil, él y otros DJs locales tomaron el funk tradicional y lo llevaron al extremo: ritmos rotos, bajos ensordecedores que saturan a propósito (la famosa Bruxaria) y el uso de coros fantasmales. No hicieron esta música para los videos de gimnasio de internet, la hicieron para los sistemas de sonido masivos (Paredões) en las fiestas callejeras de Brasil, definiendo la crudeza y originalidad real del género.",
        "3":"Son los padres fundadores del género. Crearon el sonido pesado, oscuro y arrastrado característico del metal tras bajar la afinación de las guitarras por un accidente industrial de su guitarrista.",
        "4":"Revolucionaron la escena de los 2000 al contrastar la agresividad de las guitarras afinadas en tonos bajos (típicas del Nu Metal) con melodías de piano melancólicas y la voz operística e inconfundible de Amy Lee. Su disco debut, Fallen, demostró que el género podía ser pesado y oscuro, pero a la vez profundamente emocional, abriendo las puertas del metal a un público totalmente nuevo.",
        "5":"Son la institución definitiva del rock urbano en México. Liderados por Alex Lora (y originados en los años 60 como Three Souls in My Mind), fueron fundamentales por atreverse a cantar rock original y contestatario en español cuando el gobierno censuraba el género tras el festival de Avándaro. Le dieron voz a la clase trabajadora y a los barrios marginados, manteniendo vivo el blues y el rock and roll puro por más de cinco décadas.",
        "6":"Llevaron el funk de los clubes subterráneos a los estadios masivos. Revolucionaron el género al sofisticarlo con arreglos de metales extremadamente precisos, armonías vocales complejas y elementos de jazz y ritmos africanos, creando clásicos atemporales que siguen siendo la base de la música de baile moderna.",
        "7":"Definieron el sonido épico del metal clásico popularizando el ataque de 'guitarras gemelas' y elevando las letras con narrativas basadas en historia y literatura clásica.",
        "8":"Son los creadores absolutos de una fusión única en el mundo que entrelaza la pesadez y afinación del Nu Metal con los ritmos vocales del reggae y el dancehall jamaiquino.",
        "9":"Son considerados pioneros absolutos de la vanguardia musical latinoamericana. Su mayor aportación fue demostrar que el rock no tenía que imitar al sonido anglosajón, logrando un éxito masivo al fusionar sintetizadores, punk y rock alternativo con raíces folclóricas mexicanas como el huapango, el bolero y la música norteña.",
        "10":"Representan la cumbre del funk moderno e independiente, destacando por un virtuosismo técnico impecable y estrategias de distribución musical revolucionarias sin disqueras.",
        "11":"Fueron los responsables de masificar y globalizar el subgénero del thrash metal, llevándolo del circuito subterráneo a convertirse en un fenómeno cultural a nivel mundial.",
        "12":"Aportaron una excentricidad inigualable al género, caracterizándose por cambios de ritmo frenéticos, influencias de música armenia y un fuerte enfoque en el activismo político.",
        "13":"Revolucionaron la escena a finales de los 90 con un sonido pesadísimo caracterizado por usar dos bajos al mismo tiempo y una batería contundente. Desafiaron la censura de los medios tradicionales con sus letras explícitas, su uso del 'spanglish' y su cruda sátira política.",
        "14":"Pioneros en demostrar que el metal en español podía alcanzar un nivel de virtuosismo técnico, melodía y producción épica a la par de las grandes potencias europeas del género.",
        "15":"Construyeron el puente definitivo entre el rock pesado, el rap y la música electrónica, creando el álbum debut más vendido del siglo XXI y definiendo el sonido de toda una generación."
    },
    "VidImg":{
        "1":"../Img/Exponentes/Cuarteto.gif",
        "2":"../Img/Exponentes/Montagem.gif",
        "3":"../Img/Exponentes/BlackSabbath.gif",
        "4":"../Img/Exponentes/Evanescence.gif",
        "5":"../Img/Exponentes/ElTri.gif",
        "6":"../Img/Exponentes/EWF.gif",
        "7":"../Img/Exponentes/IronMaiden.gif",
        "8":"../Img/Exponentes/Skindred.gif",
        "9":"../Img/Exponentes/Cafe.gif",
        "10":"../Img/Exponentes/Vulfpeck.gif",
        "11":"../Img/Exponentes/Metallica.gif",
        "12":"../Img/Exponentes/ChopSuey.gif",
        "13":"../Img/Exponentes/Molotov.gif",
        "14":"../Img/Exponentes/RataBlanca.gif",
        "15":"../Img/Exponentes/LinkinPark.gif"
    }
};
function set(){
    document.body.style.backgroundImage = `url(${cata.VidImg[index]})`
    document.getElementById("data").children.item(0).innerHTML = cata.Nombres[index]
    document.getElementById("data").children.item(1).innerHTML = cata.Genero[index]
    document.getElementById("data").children.item(2).innerHTML = cata.Descripcion[index]
}
document.addEventListener("DOMContentLoaded",set())

function next(){
    if(index>=14) index = 1
    else index++
    set()
}
function back(){
    if(index<=1) index = 14
    else index--
    set()
}