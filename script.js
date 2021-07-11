const play = document.querySelector('#play')
const back = document.getElementById('backward')
const next = document.getElementById('forward')
const container = document.getElementById('container')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const cover = document.getElementById('cover')
const progress = document.querySelector('.progress-id')
const progressContainer = document.querySelector('.progress')


const songs = ["faded", "payphone", "mushoku"]

let songInd = 0;

load(songs[songInd])

function load(song) {
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    container.classList.add('play')
    play.innerHTML = '<i class="fas fa-pause"></i>'
    audio.play()
}
function pauseSong() {
    container.classList.remove('play')
    play.innerHTML = '<i class="fas fa-play"></i>'
    audio.pause()
}
function nextSong() {
    songInd++
    if (songInd > (songs.length - 1)) {
        songInd = 0
    }
    load(songs[songInd])
    playSong()
}
function prevSong() {
    songInd--
    if (songInd < 0) {
        songInd = (songs.length - 1)
    }
    load(songs[songInd])
    playSong()
}
function progressPer(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
function setProgress(e){
    const width = this.clientWidth
    const click = e.offsetX
    const duration = audio.duration

    audio.currentTime = (click/width)*duration
}

play.addEventListener("click", () => {
    const playing = container.classList.contains('play')

    if (playing) {
        pauseSong()
    }
    else {
        playSong()
    }
})

next.addEventListener("click", nextSong)
back.addEventListener("click", prevSong)
audio.addEventListener("timeupdate", progressPer)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)

