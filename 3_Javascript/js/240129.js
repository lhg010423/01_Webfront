document.getElementById("btn1").addEventListener("click", (a) => {
    setTimeout(function() {
        alert("3초후 출력")
    }, 3000);
});

let interval;
function currentTime() {
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}