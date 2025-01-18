function clock(sec) 
{
    HH = 0, mm = 0, ss = 0

    HH = Math.floor(sec/3600);
    mm = Math.floor((sec - (3600*HH)) / 60);
    ss = Math.floor(sec - (3600*HH) - (mm*60));

    if (HH === 24)
        HH -= 24;
    else if (mm === 60)
        mm -= 60;

    
    console.log(`${HH<10?0:""}${HH}:${mm<10?0:""}${mm}:${ss<10?0:""}${ss}`);
}


clock(5025)
clock(61201)
clock(87000)