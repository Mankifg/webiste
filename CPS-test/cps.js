var clicks = 0;
var every_10;
var time = 0;
document.addEventListener('DOMContentLoaded', (event) => {

    reset()


    

    




});
var do_math;
var update;
function update_fun() {
    var slow_time = time.toFixed(2)
    do_math = clicks / slow_time
    
    console.log(slow_time, clicks, do_math) 
    document.getElementById("cps").value = 'CPS:  ' + do_math.toFixed(3);

    
}

function test() {
    if (clicks == 0) {
        update = setInterval(update_fun,50)
        every_10 = setInterval(refresh, 10)
        
    }
    
    clicks = clicks + 1
    if (time > 9.990) {
        clicks = clicks - 1
    }
    document.getElementById("count_clicks").value = 'CLICKS:  ' + clicks
}

function refresh() {
    time = time + 0.01
    if (time > 9.990) {
        clearInterval(every_10)
        clearInterval(update)

    }

    document.getElementById("time_cps").value = 'TIME:  ' + time.toFixed(3);
}

function reset() {
    clicks = 0
    time = 0
    do_math = 0
    document.getElementById("count_clicks").value = "CLICKS:  0"
    document.getElementById("time_cps").value = 'TIME:  0.000'
    document.getElementById("cps").value = "CPS:  0" 
    document.getElementById("reset").value = "RESET"
    clearInterval(every_10)
    clearInterval(every_10)
    clearInterval(update)

}