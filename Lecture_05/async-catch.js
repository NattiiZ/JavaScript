function yay0rNay() 
{
    return new Promise((resolve, reject) => {
                    const value = Math.round(Math.random() * 1);
                    value?resolve("Lucky🍀"):resolve("Nope😜");
                })
}

async function msg() 
{
    try {
        const msg = await yay0rNay();
        console.log(msg);
    }
    catch(err) {
        console.log(err);
    }
}


let count = 10;

while (count > 0)
{
    msg();
    count--;
}