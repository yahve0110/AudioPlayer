function createElement(element) {
    const createdElement = document.createElement(element);
    return createdElement;
}

function appendElementTo(element,appendTo){
appendTo.append(element)
return true
}

function addSrc(element,src){
    element.src = src
    return true
}

function addClass(element,className){
element.classList.add(className)
}

function addInnerText(element,innerText){
    element.innerText += innerText
    }

const content = document.querySelector(".content")


playlist = {
    pageTitle:"MyPlaylists",

    playListInfo:{
    playlistImg: "./img/audiocover.png",
    heading:"Playlist",
    playListName:"Hip-Hop Hits",
    numberOfTracks: `${4} tracks,`,
    playlistDuration:" 12m 13s",
    playlistArtists:"Eminem,50cent,Lloyd Banks",
    others:         " and others"
    },

    trackList:[
        {trackInfo:"Eminem - Rap God",
         trackAudio: "audio/RapGod.mp3",
         trackImg: "./img/EminemTrack.png",
         top:       true,
        },
        {trackInfo:"50 cent - In da Club",
         trackAudio: "audio/50 Cent - In Da Club.mp3",
         trackImg: "./img/50cent.png",
         top:       false,
        },
        {trackInfo:"DMX - X Gon' Give It To Ya",
        trackAudio: "audio/DMX - X Gon' Give It To Ya.mp3",
        trackImg: "./img/EminemTrack.png",
        trackImg: "./img/dmx.png",
        top:       true,
       },
       {trackInfo:"Eminem feat 50 Cent, Cashis, Lloyd Banks - You Don't Know ",
        trackAudio: "audio/youDOntKNow.mp3",
        trackImg: "./img/ydnt.png",
        top:       false,
       },
       
    ]

}

playlist2 = {
    pageTitle:"MyPlaylists",

    playListInfo:{
    playlistImg: "img/cover2.png",
    heading:"Playlist",
    playListName:"Rap Hits 1990s",
    numberOfTracks: `${4} tracks,`,
    playlistDuration:" 15m 22s",
    playlistArtists:"Rap Hits 1990s",
   
    },

    trackList:[
        {trackInfo:"Public Enemy - Fight the Power",
         trackAudio: "audio/Public Enemy - Fight The Power.mp3",
         trackImg: "img/fightthepower.png",
         top:       true,
        },
        {trackInfo:"Vanila Ice - Ice Ice Baby",
         trackAudio: "audio/Vanilla Ice - Ice Ice Baby.mp3",
         trackImg: "img/vanillaice.png",
         top:       true,
        },
        {trackInfo:"MC Hammer - You Can’t Touch This",
        trackAudio: "audio/Mc Hammer - U Can't Touch This.mp3",
        trackImg: "img/mchammer.png",
        top:       false,
       
       },
       {trackInfo:"Brand Nubian - Brand Nubian",
        trackAudio: "audio/Brand Nubian - The Return.mp3",
        trackImg: "img/brandnubian.png",
        top:       false,
       },
       
    ]

}

playlist3= {
    pageTitle:"MyPlaylists",

    playListInfo:{
    playlistImg: "img/cover2.png",
    heading:"Playlist",
    playListName:"Rap Hits 1990s",
    numberOfTracks: `${4} tracks,`,
    playlistDuration:" 15m 22s",
    playlistArtists:"Rap Hits 1990s",
   
    },

    trackList:[
        {trackInfo:"Public Enemy - Fight the Power",
         trackAudio: "audio/Public Enemy - Fight The Power.mp3",
         trackImg: "img/fightthepower.png",
         top:       true,
        },
        {trackInfo:"Vanila Ice - Ice Ice Baby",
         trackAudio: "audio/Vanilla Ice - Ice Ice Baby.mp3",
         trackImg: "img/vanillaice.png",
         top:       true,
        },
        {trackInfo:"MC Hammer - You Can’t Touch This",
        trackAudio: "audio/Mc Hammer - U Can't Touch This.mp3",
        trackImg: "img/mchammer.png",
        top:       false,
       
       },
       {trackInfo:"Brand Nubian - Brand Nubian",
        trackAudio: "audio/Brand Nubian - The Return.mp3",
        trackImg: "img/brandnubian.png",
        top:       false,
       },
       
    ]

}

playlist4 = {
    pageTitle:"MyPlaylists",

    playListInfo:{
    playlistImg: "./img/audiocover.png",
    heading:"Playlist",
    playListName:"Hip-Hop Hits",
    numberOfTracks: `${4} tracks,`,
    playlistDuration:" 12m 13s",
    playlistArtists:"Eminem,50cent,Lloyd Banks",
    others:         " and others"
    },

    trackList:[
        {trackInfo:"Eminem - Rap God",
         trackAudio: "audio/RapGod.mp3",
         trackImg: "./img/EminemTrack.png",
         top:       true,
        },
        {trackInfo:"50 cent - In da Club",
         trackAudio: "audio/50 Cent - In Da Club.mp3",
         trackImg: "./img/50cent.png",
         top:       false,
        },
        {trackInfo:"DMX - X Gon' Give It To Ya",
        trackAudio: "audio/DMX - X Gon' Give It To Ya.mp3",
        trackImg: "./img/EminemTrack.png",
        trackImg: "./img/dmx.png",
        top:       true,
       },
       {trackInfo:"Eminem feat 50 Cent, Cashis, Lloyd Banks - You Don't Know ",
        trackAudio: "audio/youDOntKNow.mp3",
        trackImg: "./img/ydnt.png",
        top:       false,
       },
       
    ]

}



function renderPlaylist(playlistForRendering) {
    // Create a new container for each playlist
    const playlistContainer = createElement("div");
    addClass(playlistContainer, "container1");
    appendElementTo(playlistContainer, content);

    renderPlaylistHeader(playlistForRendering, playlistContainer);
    renderTrackList(playlistForRendering.trackList, playlistContainer);
}

function renderPlaylistHeader(playlist, container) {
    let playlistHeader = createElement("div");
    addClass(playlistHeader, "firstPlaylist");
    appendElementTo(playlistHeader, container);

    let imgdiv = createElement('div');
    addClass(imgdiv, "imgdiv");
    appendElementTo(imgdiv, playlistHeader);

    let imgElement = createElement("img");
 
    appendElementTo(imgElement, imgdiv);
    addSrc(imgElement, playlist.playListInfo.playlistImg);

    let infodiv = createElement("div");
    addClass(infodiv, "infodiv");
    appendElementTo(infodiv, playlistHeader);

    let headingElement = createElement("h3");
    appendElementTo(headingElement, infodiv);
    addInnerText(headingElement, playlist.playListInfo.heading);

    let playlistName = createElement("h2");
    addClass(playlistName, "namePlaylist");
    appendElementTo(playlistName, infodiv);
    addInnerText(playlistName, playlist.playListInfo.playListName);

    let playlistInfo = createElement("div");
    appendElementTo(playlistInfo, infodiv);
    addClass(playlistInfo, "tracksandduration");

    nrOfTracksInPlaylist = createElement("p");
    addClass(nrOfTracksInPlaylist, "nrandduration");
    appendElementTo(nrOfTracksInPlaylist, playlistInfo);
    addInnerText(nrOfTracksInPlaylist, playlist.playListInfo.numberOfTracks);
    addInnerText(nrOfTracksInPlaylist, playlist.playListInfo.playlistDuration);

    artistsInPlaylist = createElement("div");
    addClass(artistsInPlaylist, "artistsInPlaylist");
    appendElementTo(artistsInPlaylist, playlistInfo);

    artistsInPlaylistinfo = createElement("div");
    addClass(artistsInPlaylistinfo, "artistsInPlaylistinfo");
    addInnerText(artistsInPlaylistinfo, playlist.playListInfo.playlistArtists);
    appendElementTo(artistsInPlaylistinfo, artistsInPlaylist);

 
    if(playlist.playListInfo.others ){
    artistsInPlaylistinfoOthers = createElement("div");
    addClass(artistsInPlaylistinfoOthers, "artistsInPlaylistinfoOthers");
    addInnerText(artistsInPlaylistinfoOthers, playlist.playListInfo.others);
    appendElementTo(artistsInPlaylistinfoOthers, artistsInPlaylist);
    }
}

function renderTrackList(trackList, container) {
    for (let i = 0; i < trackList.length; i++) {
        renderTrack(trackList[i], container);
    }
}

function renderTrack(trackInfo, container) {
    const trackContainer = createElement("div");
    addClass(trackContainer, "trackdiv");
    appendElementTo(trackContainer, container);

    const imgsubtrackContainer = createElement("div");
    addClass(imgsubtrackContainer, "imgsubcontainer");
    appendElementTo(imgsubtrackContainer, trackContainer);

    const subtrackContainer = createElement("div");
    addClass(subtrackContainer,"subtrackContainer")
    appendElementTo(subtrackContainer, trackContainer);

    const trackImg = createElement("img");
    addClass(trackImg, "imgTrack");
    addSrc(trackImg, trackInfo.trackImg);
    appendElementTo(trackImg, imgsubtrackContainer);

    const trackInfoElement = createElement("div");
    addClass(trackInfoElement, "trackInfoElement")
    addInnerText(trackInfoElement, trackInfo.trackInfo);
    if(trackInfo.top){
        const fireElement = createElement("img");
        addSrc(fireElement, "img/fire.png")
        addClass(fireElement,"fire")
        appendElementTo(fireElement, trackInfoElement);
     }
     
   
    appendElementTo(trackInfoElement, subtrackContainer);




    const audioElement = createElement("audio");
    audioElement.controls = true;
    addClass(audioElement, "track");
    addSrc(audioElement, trackInfo.trackAudio);
    appendElementTo(audioElement, subtrackContainer);
}


renderPlaylist(playlist);
renderPlaylist(playlist2);
