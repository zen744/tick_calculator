function cal(){
    // get value
    cal_type = document.getElementById("type").value
    ms = document.getElementById("ms").value
    sec = document.getElementById("sec").value
    min = document.getElementById("min").value
    hour = document.getElementById("hour").value
    tick = document.getElementById("tick").value
    error_ = document.getElementById("error")

    // check error
    if(ms < 0 ||sec < 0 ||min < 0 ||hour < 0 ||tick < 0){
        error_.innerHTML="can't calculate negative number"
        return
    }
    
    // calculate time to tick
    if(cal_type == "time_tick"){
        ms = parseFloat(ms)
        ms = parseFloat(ms+sec*1000)
        ms = parseFloat(ms+min*60000)
        ms = parseFloat(ms+hour*3600000)
        document.getElementById("tick").value=parseInt(ms/50)
    }

        // calculate tick to time
    else{
        tick = parseFloat(tick)
        ms = tick*50
        document.getElementById("hour").value=parseInt(ms/3600000)
        hour = ms%3600000
        document.getElementById("min").value=parseInt(hour/60000)
        min = hour%60000
        document.getElementById("sec").value=parseInt(min/1000)
        sec = min%1000
        ms = document.getElementById("ms").value=sec
    }
}
function clear_all(){
    ms = document.getElementById("ms").value
    sec = document.getElementById("sec").value
    min = document.getElementById("min").value
    hour = document.getElementById("hour").value
    tick = document.getElementById("tick").value
    error_ = document.getElementById("error")

    document.getElementById("ms").value=""
    document.getElementById("sec").value=""
    document.getElementById("min").value=""
    document.getElementById("hour").value=""
    document.getElementById("tick").value=""
    error_.innerHTML=""
}
