class Song 
{
    constructor() 
    {
        this.title;
        this.author;
    }

    play()
    {
        console.log("Song is playing");
    }
}

const mySong = new Song();
mySong.play();