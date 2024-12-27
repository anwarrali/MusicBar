const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const seekBar = document.getElementById('seekbar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

//Play/Pause 
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = `⏸ `;
        playPauseButton.style.fontSize='30px';
    } else {
        audio.pause();
        playPauseButton.textContent = `►`;
        playPauseButton.style.fontSize='30px';

    }
});

// Update Seekbar and Time Display
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Update Duration Display on Metadata Load
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Seek Audio
seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Format Time 
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
const music=[
    {name:"Kamin Emin ft.jony", mus:"audio/jony.m4a",img:"img/jony.jpeg" },
    {name:"jogo de tolos", mus:"audio/jogo.m4a",img:"img/jogo.jpg" },
    {name:"a girl within my soul", mus:"audio/A Girl Within My Soul .m4a",img:"img/soul.jpeg" },
    {name:"Eu Sento Gabu!", mus:"audio/Eu Sento Gabu! (SUPER SLOWED).m4a",img:"img/gabu.jpeg" }
];
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');

const image=document.querySelector('img');
const names=document.querySelector('.name');
const ad=document.querySelector('source');
let i=1;
next.addEventListener('click',function(){
    moveToNext();
});
prev.addEventListener('click',function(){
    moveToprev();
});

function moveToNext(){
image.setAttribute("src",music[i].img)
names.textContent=music[i].name;
ad.setAttribute("src", music[i].mus);
audio.load(); 
if(i==music.length-1){
i=0;
}else{
  i=i+1;  
}
audio.play();
}
function moveToprev(){
    image.setAttribute("src",music[i].img)
    names.textContent=music[i].name;
    ad.setAttribute("src", music[i].mus);
    audio.load(); 
    if (i === 0) {
        i = music.length - 1;  
    } else {
        i = i - 1;  
    }
    audio.play();
    }
    