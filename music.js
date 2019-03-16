var Library = function(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}
Library.prototype.addPlaylist = function(playlist) {
    this.playlists.push(playlist);
    console.log(`Playlist : ${playlist.name} has been added to Library ${this.name}`);
}
var PlayList = function(name){
    this.name = name;
    this.tracks = [];
}
PlayList.prototype.overallRating = function(){
    let totalRating = 0;
    this.tracks.forEach((track) => {
        totalRating += track.rating;
    })
    return totalRating/this.tracks.length;
}
PlayList.prototype.totalDuration = function(){
    let totalDuration = 0
    this.tracks.forEach((track) => {
        totalDuration += track.length;
    })
    return totalDuration;
}
PlayList.prototype.addTrack = function(track) {
    this.tracks.push(track);
    console.log(`Track ${track.title} added successfully!`);
}

var Track = function(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
}

let track1 = new Track("Code Monkey", 3, 2);
let track2 = new Track("Fancy Rock", 5, 8);
let track3 = new Track("Sound Band", 1, 4);
let track4 = new Track("Spicy King", 4, 10);
playlist1 = new PlayList("LightHouse");
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
console.log('Playlist1 Total Duration: ' + playlist1.totalDuration());
console.log('Playlist1 Overall Rating: ' + playlist1.overallRating());
library1 = new Library("LH Bootcamp", "Bindu");
library1.addPlaylist(playlist1);
