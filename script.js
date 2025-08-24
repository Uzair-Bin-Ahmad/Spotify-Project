
let songIndex=0;
let audio=new Audio('song/Haseen.mpeg');
let masPlay= document.getElementById('mastPlay');
let Prog=document.getElementById('prog');
let gif=document.getElementById('gif');
let MSN=document.getElementById('MSN');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {
        songName:"Haseen", filePath: "song/Haseen.mpeg",coverPath: "cover/bgg.jpg"
    },
    {
        songName:"Nasha", filePath: "song/nasha.mpeg",coverPath: "cover/1.jpg"
    },
    {
        songName:"Paro", filePath: "song/paro.mpeg",coverPath: "cover/2.jpg"
    },
    {
        songName:"Sanam", filePath: "song/Sanam.mpeg",coverPath: "cover/3.jpg"
    },
    {
        songName:"Dev", filePath: "song/dev.mpeg",coverPath: "cover/4.jpg"
    }
]
songItem.forEach((element , i)=>{
    console.log(element,i);
         element.getElementsByTagName('img')[0].src =songs[i].coverPath;
         element.getElementsByClassName('songName')[0].innerText =songs[i].songName;
})
masPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masPlay.classList.remove('fa-play-circle');
        masPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masPlay.classList.remove('fa-pause-circle');
        masPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audio.addEventListener('timeupdate',()=>{
    
    progre = parseInt(audio.currentTime/audio.duration*100);
    prog.value = progre;
})
prog.addEventListener('change', ()=>{
    audio.currentTime = prog.value * audio.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SIP')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('SIP')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       
       audio.src=songs[songIndex].filePath;
       MSN.innerText = songs[songIndex].songName;
       audio.currentTime=0;
       audio.play();
       gif.style.opacity=1;
       masPlay.classList.remove('fa-play-circle');
       masPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audio.src=songs[songIndex].filePath;
    MSN.innerText = songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    masPlay.classList.remove('fa-play-circle');
    masPlay.classList.add('fa-pause-circle');
})
ocument.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    
    audio.src=songs[songIndex].filePath;
    MSN.innerText = songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    masPlay.classList.remove('fa-play-circle');
    masPlay.classList.add('fa-pause-circle');
})
