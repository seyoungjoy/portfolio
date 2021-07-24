//뮤직 플레이어
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');

// All songs list
let All_song = [
    {
        name: "Thank you",
        path: "assets/music/song1.mp3",
        singer: "for visiting my portfolio!"
    },
    {
        name: "Please enjoy it ",
        path: "assets/music/song2.mp3",
        singer: "with a happy song~!"
    }
];

// All functions
// function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;	
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider ,1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}

load_track(index_no);


// checking.. the song is playing or not
function justplay(){
    if(Playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}


// reset song slider
function reset_slider(){
    slider.value = 0;
}

// play song
function playsong(){
track.play();
Playing_song = true;
play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
document.getElementsByClassName('#play .fa-play').style.marginLeft = ('0');
}

//pause song
function pausesong(){
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}


// previous song
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();

    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


// change slider position 
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;
        
    // update slider position
    if(!isNaN(track.duration)){
    position = track.currentTime * (100 / track.duration);
    slider.value =  position;
    }

        
    // function will run when the song is over
    if(track.ended){
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if(autoplay==1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}