function createQuote(qoute, callback) 
{
    let myQoute = "Like I always say, " + qoute;
    callback(myQoute);
}

function logQoute(qoute)
{
    console.log(qoute + " Yes..");
}

createQuote(" you will getting better!", logQoute);