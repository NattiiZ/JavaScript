// Date function return millisecond that have elapsed
// since midnight on Jan 1, 1990, UTC
// this example take 2 second to run

const start = Date.now();

console.log("Starting timer...");

setTimeout(() => {
    const millisec = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millisec / 1000)}`);
    
}, 2000);