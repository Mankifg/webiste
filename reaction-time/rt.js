document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('big').style.backgroundColor = "yellow" 
});
var clicked = 0
var time = 0
var canClick = false
var hold_time = 0        
var random_number = 0 
var first_time = 0
var clicked_time = 0       

function clicked_big_box() {
    if (canClick == true) {
        clicked = 1
        clicked_time = Date.now();
        
        time = clicked_time - first_time
        time = time / 10000
        
        document.getElementById('id').value = 'Timer:  ' + time
        document.getElementById('big').style.backgroundColor = "yellow" 

    } else {
        document.getElementById('id').value = 'Timer:  false'
        alert("Hey you don't cheat or else...")
        
    }
}

function start() {
    time = 0
    canClick = false
    document.getElementById('id').value = 'Timer:  ' +  time
    
    document.getElementById('big').style.backgroundColor = "red";
    clicked = 0
    random_number =Math.random() * 12000
    

    first_time = Date.now();
    
    setTimeout(function(){document.getElementById('big').style.backgroundColor = "green"; canClick = true; }, random_number);
    
        
    
    




} 




























