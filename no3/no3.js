koliko_metov = 1
function MetKocke() {
    koliko_metov = 1
    var koliko_metov = parseInt(prompt('How many times?'))

    if (koliko_metov > 1000000) {
        alert('you need premium to run this command, use numbers lower than 1000000')

    } else {
        var meti = []
        for (var l = 0; l < koliko_metov; l++) {
            var kocka = (Math.floor(Math.random() * 6)) + 1
            meti.push(kocka)
        }
        alert(meti)
        var vsota = 0
        var povp = 0

        for (var i = 0; i < meti.length; i++) {
            vsota = vsota + meti[i]
            povp = vsota / meti.length
        }
        alert('Povprečje je:  ' + povp)
    

}

}
function sum() {
    var sum = prompt('Type a number and resultat will look like this(4, 1+2+3+4= 10)')
    if (sum % 2 == 0) {
        var half = sum / 2
        var vsota = 0
        var one_more = sum + 1
        vsota = one_more * half
        alert(vsota)

    } else {
        alert('invalid number, only number % 2 == 0')
    }

}
function fakulteta() {
    var fakultera = parseInt(prompt('number'))
    var i = 0
    var zmnozek = 1

    for (i = 1; i < (fakultera + 1); i++) {
        zmnozek = zmnozek * i
    }

    alert(zmnozek)

}
function gues_a_number() {
    var difficult = parseInt(prompt('how may diffrend nums'))
    var player_number = 0
    var real_num = 1 + Math.floor(Math.random() * difficult)
    console.log(real_num)
    var i = 0
    var gass = 0


    while (gass == 0) {
        i = i + 1
        player_number = parseInt(prompt('num'))
        if (player_number == real_num) {
            gass = 1
            alert('you did in ' + i + ' attempts')
            break
        }
        if (player_number == -1) {
            alert('breaked')
            break
        }
        if (player_number < real_num) {
            alert('^   (gor)')
        }
        if (player_number > real_num) {
            alert('ˇ   (dol)')
        }
    }
}

function define_number() {
    var number = parseInt(prompt('number?'))
    var gor_dol = ''
    if (number < 0) {
        gor_dol = 'je negativno'
    }
    if (number > 0) {
        gor_dol = 'je pozitivno'
    }
    if (number == 0) {
        gor_dol = 'je 0'
    }
    var sodo_liho = ''
    if (number % 2 == 0) {
        sodo_liho = 'sodo'
    }  
    if (!number % 2 == 1) { 
        sodo_liho = 'liho'
    }
    if (number == '') {
        alert('to ni število')
        
    }
    var porocilo = 'Stevilo ' + number + ' ' + gor_dol + ' ter ' + sodo_liho + '.'
    alert(porocilo)
}



var pogum = true
var i = 0
function door_3() {
    while (pogum == true) {
        i = i + 1
        var ghost_door = 1 + Math.floor(Math.random() * 3 )
        var player_door = prompt('the door is three....behind one is ghost...now chose 1,2 or 3') 
        if (player_door == ghost_door) {
            pogum = false
            break
        }

        if (player_door == -1) {
            alert('break')
            break   
        } else
        {
            alert('you survived, next room...')
        }
    }
    alert('you died after ' + i + ' attempts')

}



