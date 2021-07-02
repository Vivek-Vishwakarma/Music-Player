const play = document.querySelector('#play')
const back = document.querySelector('#backward')
const next = document.querySelector('#forward')
const container = document.getElementById('container')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const cover =  document.getElementById('cover-img')

const songs = ["faded", "payphone"]

let songInd = 0;

load(songs[songInd])

function load(song){
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`
    cover.scr = `images/${song}.png`
}

function playSong(){
    container.classList.add('play')
    play.innerHTML = '<i class="fas fa-pause"></i>'
    audio.play()
}
function pauseSong(){
    container.classList.remove('play')
    play.innerHTML = '<i class="fas fa-play"></i>'
    audio.pause()
}
play.addEventListener("click", () => {
    const playing = container.classList.contains('play')

    if(playing){
        pauseSong()
    }
    else{
        playSong()
    }
})