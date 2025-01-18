function moveCap(text) 
{
    Chars = text.split("");
    string = "";

    for(find of Chars)
    {
        if (find.match((/[A-Z]/g)))
            string += find
    }

    for(find of Chars)
    {
        if (find.match((/[a-z]/g)))
            string += find
    }
    
    console.log(string);
}


moveCap("hApPy");
moveCap("moveMENT");
moveCap("shOrtCAKE");