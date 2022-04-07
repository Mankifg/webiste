document.addEventListener('DOMContentLoaded', (event) => {
    // Ko je spletna stran pripravljena

    //var time
    var full = ''
    var send = ''
    var split = ''
    
   






    var tipke = document.getElementsByClassName("tipka");
    for (var i = 0; i < tipke.length; i++) {
        var tipka = tipke[i];
        tipka.onclick = function () {
            var cmd = document.getElementById("cmd").value;
            if (this.value == 'del') {
                document.getElementById("cmd").value = '';
                num1 = ''
            }
            else if (this.value == '<') {
                full = cmd

                split = full.split("")

                split.splice(split.length - 1, 1)

                send = split.join("")

                document.getElementById("cmd").value = send;
            }
            else if (this.value == 'calculate') { 
                var num1 = ''
                var num2 = ''
                var rez = 0
                var operacija = 0
                for (var l = 0; l < cmd.length; l++) {
                    var crka = parseInt(cmd[l])
                    var preveri = Number.isNaN(crka)
                    if (preveri == false) {
                        
                        if (operacija == 0) {
                            num1 = num1 + "" +  crka
                        } else {
                            num2 = num2 + "" + crka
                        } 
                    }
                    if (preveri == true) {
                        operacija = cmd[l]
                    
                    }

                }
                if(operacija == '+') {
                    var num1_str = parseInt(num1)
                    var num2_str = parseInt(num2)
                    rez = num1_str + num2_str
                }
                console.log('num1: ' + num1)
                console.log('opr: ' + operacija)
                console.log('num2: ' + num2)
                console.log('')
                if (num1 < 0 & num2 < 0) {
                    
                    rez = parseInt(num1 + num2)
                    rez =  0 - rez
                }

            
                if(operacija == '-') {
                    rez = num1 - num2
                }
                if(operacija == 'x') {
                    rez = num1 * num2
                }
                if(operacija == '/') {
                    rez = num1 / num2
                }
                document.getElementById("cmd").value = rez 
            }
             
                
                    
                    
                    
                        
                  
            
                
                
            else {
                document.getElementById("cmd").value += this.value;
            }


        };
    }
});



