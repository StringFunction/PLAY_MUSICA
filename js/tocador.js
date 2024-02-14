import { musicas } from "./dicionario.js";
// pause = document.getElementById('pause')
const proxima = document.getElementById('proxima')
const play = document.getElementById('play')
const antes = document.getElementById('antes')


const incio = document.querySelector('.inicio')
const fim = document.querySelector('.fim')



const nomeMusica = document.getElementById('nome_musica')
const autor = document.getElementById('autor')
const img = document.getElementById('img_musica')
const barra =  document.querySelector('.barra')
const tocador = document.querySelector('audio')
let progresso = document.querySelector('progress')
const repete = document.querySelector('.repete')
const aleatorio = document.querySelector('.aleatori')
console.log(repete);
var index = 0
var REPETEE = false
var ALEATORIOO = false

var flag = false

function tocar(){
    if (!flag){
    play.style.display = 'none'
    pause.style.display = 'flex'
    tocador.src = musicas[index]['local']
    nomeMusica.textContent = musicas[index]['Nome_musica']
    autor.textContent= musicas[index]['autor']
    img.src = musicas[index]['img']
    tocador.play()
    flag = true
    }
    else{
        tocador.play()
        play.style.display = 'none'
        pause.style.display = 'flex'
       
    }
    
}
function para(){
  
  
    play.style.display = 'flex'
    pause.style.display = 'none'
    tocador.pause()
    console.log(flag);
    

}

function segundoparaminutos(segundos){
    let M = Math.floor(segundos/60)
    let s = segundos % 60 
    if (s < 10){
        s = '0' + s
    }
    return M + ':' + s
}
function atualizar(){
    progresso.style.width = Math.floor((tocador.currentTime / tocador.duration) * 100 ) + "%"
    incio.textContent = segundoparaminutos(Math.floor(tocador.currentTime))
    fim.textContent = segundoparaminutos(Math.floor(tocador.duration))

    if (incio.textContent == fim.textContent){
        index++
        tocador.src = musicas[index]['local']
        nomeMusica.textContent = musicas[index]['Nome_musica']
        autor.textContent= musicas[index]['autor']
        img.src = musicas[index]['img']
        tocador.play()
        flag = true
    }



}
function passsar(){
    if(index <= musicas.length){
    play.style.display = 'none'
    pause.style.display = 'flex'

    index++
    tocador.src = musicas[index]['local']
    nomeMusica.textContent = musicas[index]['Nome_musica']
    autor.textContent= musicas[index]['autor']
    img.src = musicas[index]['img']
   
    tocador.play()
    flag = true
}
    else{
    index = 0
    play.style.display = 'none'
    pause.style.display = 'flex'
    tocador.src = musicas[index]['local']
    nomeMusica.textContent = musicas[index]['Nome_musica']
    autor.textContent= musicas[index]['autor']
    img.src = musicas[index]['img']
   
    tocador.play()
    flag = true
    }

}
function ante(){
  
    if (index != 0){

    index--
    play.style.display = 'none'
    pause.style.display = 'flex'
    tocador.src = musicas[index]['local']
    nomeMusica.textContent = musicas[index]['Nome_musica']
    autor.textContent= musicas[index]['autor']
    img.src = musicas[index]['img']
  
    tocador.play()
    flag = true
    }

}
function avanca(e){
    // console.log(progresso.offsetWidth);
    const newTime = (e.offsetX / barra.offsetWidth) * tocador.duration
    console.log(
        newTime
    );
    tocador.currentTime = newTime
}


play.addEventListener('click', tocar)
pause.addEventListener('click', para)
tocador.addEventListener('timeupdate', atualizar)
proxima.addEventListener("click", passsar)
antes.addEventListener('click', ante)
barra.addEventListener('click', (e) => {avanca(e)})
repete.addEventListener('click', (e) => {
    if (!REPETEE){
        repete.style.color = 'white'
        REPETEE = true
    }
    else{
    repete.style.color = 'Gray'
    REPETEE = false
    }
})

