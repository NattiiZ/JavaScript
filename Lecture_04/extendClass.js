// Parent class
class Media 
{
    constructor(info) 
    {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media 
{
    constructor(songData) 
    {
        super(songData);
        this.artist = songData.artist;
    }
}