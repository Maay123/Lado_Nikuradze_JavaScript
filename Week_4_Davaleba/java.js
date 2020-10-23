function currentTime1(){
    result = ``
    dateTime = new Date();
    hour = dateTime.getHours()
    minute = dateTime.getMinutes()
    second = dateTime.getSeconds()

    if(hour < 10) hour = `0${hour}`;
    if(minute < 10) minute = `0${minute}`
    if(second < 10) second = `0${second}`

    result += `${hour}:${minute}:${second}`

    return result
}

function updateClock(){
    document.getElementById("clock1").innerHTML = currentTime1();
}