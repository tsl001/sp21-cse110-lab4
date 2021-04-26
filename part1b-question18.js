
function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let newTime = setInterval(getTime,1000);
